import { Input, Space } from "antd";
import React from "react";
const { Search } = Input;

const SearchAntd = ({ style, searchInput, setSearchInput }) => {
  const onSearch = (value) => setSearchInput(value);

  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={
          style || {
            width: "100%",
            maxWidth: "250px",
          }
        }
        defaultValue={searchInput}
      />
    </Space>
  );
};

export default SearchAntd;
