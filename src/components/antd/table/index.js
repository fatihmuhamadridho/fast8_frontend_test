import { Table, Col } from "antd";

const TableAntd = ({ rowSelection, columns, dataSource, rowKey }) => {
  return (
    <Col style={{ marginTop: "1rem" }}>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        rowKey={rowKey || "no"}
      />
    </Col>
  );
};

export default TableAntd;
