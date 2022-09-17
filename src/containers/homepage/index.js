/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useEffect } from "react";

import { columns } from "./data/dummy";

import TableAntd from "../../components/antd/table";
import ButtonAntd from "../../components/antd/button";
import MenuAntd from "../../components/antd/menu";
import SearchAntd from "../../components/antd/search";
import ModalAntd from "../../components/antd/modal";
import FormCore from "../../components/core/form";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState();
  const [menuSelected, setMenuSelected] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [searchInputResult, setSearchInputResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Homepage";

    for (let i = 0; i < 25; i++) {
      setData((prevState) => [
        ...prevState,
        {
          no: i + 1,
          name: `Edward King ${i}`,
          age: 32 + i,
          address: `London, Park Lane no. ${i}`,
        },
      ]);
    }
  }, []);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.age < 35,
    }),
    selectedRowKeys: selectedRowKeys?.map((data) => data?.no),
  };

  const onSubmit = () => {
    setData2(selectedRowKeys);
    setMenuSelected(2);
  };

  const formHandleSubmit = (values) => {
    setData((prevState) => [
      ...prevState,
      {
        no: data.length + 1,
        name: values.name,
        age: values.age,
        address: values.address,
      }
    ])
  };

  const menuSelectHandle = (e) => {
    setMenuSelected(Number(e.key));
  };

  const modalHandleCancel = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const dataSource = data?.filter((data) => {
    if (searchInput === "") {
      return data;
    } else if (
      data.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      String(data.age)
        .toLowerCase()
        .includes(String(searchInput).toLowerCase()) ||
      data.address.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return data;
    }
  });

  const dataSource2 = data2?.filter((data) => {
    if (searchInputResult === "") {
      return data;
    } else if (
      data.name.toLowerCase().includes(searchInputResult.toLowerCase()) ||
      String(data.age)
        .toLowerCase()
        .includes(String(searchInputResult).toLowerCase()) ||
      data.address.toLowerCase().includes(searchInputResult.toLowerCase())
    ) {
      return data;
    }
  });

  return (
    <main className="homepage">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ fontWeight: "bold" }}>Frontend Engineer Test</h2>
        <h3 style={{ marginLeft: "10px", color: "green", fontWeight: "bold" }}>
          {menuSelected === 1 ? data?.length : data2?.length || 0} data
        </h3>
      </div>
      <MenuAntd
        menuSelected={menuSelected}
        menuSelectHandle={(e) => menuSelectHandle(e)}
      />

      {menuSelected === 1 && (
        <>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SearchAntd
              searchInput={searchInput}
              setSearchInput={(e) => setSearchInput(e)}
            />
            <div style={{ display: "flex" }}>
              <ModalAntd
                title={"Add Data"}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                modalHandleCancel={(e) => modalHandleCancel(e)}
              >
                <FormCore
                  modalHandleCancel={(e) => modalHandleCancel(e)}
                  formHandleSubmit={(e) => formHandleSubmit(e)}
                />
              </ModalAntd>
              <ButtonAntd
                style={{ fontWeight: "bold", borderRadius: "6px" }}
                onClick={(e) => onSubmit(e)}
              />
            </div>
          </div>
          <TableAntd
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
          />
        </>
      )}

      {menuSelected === 2 && (
        <>
          <SearchAntd
            style={{ marginTop: "1rem", width: "250px" }}
            searchInput={searchInputResult}
            setSearchInput={(e) => setSearchInputResult(e)}
          />
          <TableAntd columns={columns} dataSource={dataSource2} />
        </>
      )}
    </main>
  );
};

export default HomePage;
