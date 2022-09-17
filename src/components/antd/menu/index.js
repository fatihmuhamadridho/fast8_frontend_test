import { Menu } from "antd";
import { PlusSquareOutlined, DatabaseOutlined } from "@ant-design/icons";

const menuItems = [
  {
    key: "1",
    icon: <PlusSquareOutlined />,
    label: "Assets",
  },
  {
    key: "2",
    icon: <DatabaseOutlined />,
    label: "Results",
  },
];

const MenuAntd = ({ menuSelected, menuSelectHandle }) => {
  return (
    <Menu
      mode="horizontal"
      selectedKeys={[String(menuSelected)]}
      onClick={(e) => menuSelectHandle(e)}
      items={menuItems}
    ></Menu>
  );
};

export default MenuAntd;
