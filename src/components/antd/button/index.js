import { Button, Col } from "antd";

const ButtonAntd = ({ type, style, size, onClick }) => {
  return (
    <Col>
      <Button
        type={type || "primary"}
        style={style || { marginTop: "1rem" }}
        size={size || "default"}
        onClick={onClick}
      >
        Submit
      </Button>
    </Col>
  );
};

export default ButtonAntd;
