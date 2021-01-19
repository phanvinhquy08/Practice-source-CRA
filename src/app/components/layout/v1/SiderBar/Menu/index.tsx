import React from "react";
import { Menu } from "antd";
import { MenuProps } from "antd/lib/menu";
import {
  HomeOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import routers from "../../../../../routers";

const privateRouter = Object.values(routers);

type Props = {} & MenuProps;

type MenuItemProps = {
  path: string;
  icon: React.ReactNode;
  name: string;
};

const menuItems: MenuItemProps[] = [
  {
    path: "/",
    icon: <HomeOutlined />,
    name: "Home",
  },
  {
    path: "/user",
    icon: <UserOutlined />,
    name: "User",
  },
  {
    path: "/passenger",
    icon: <UserSwitchOutlined />,
    name: "Passenger",
  },
];

const MenuBar: React.FC<Props> = ({ ...rest }) => {
  const location = useLocation();

  const getKey = (): string[] => {
    const path = location.pathname.split("/")[1];
    return path ? [`/${path}`] : ["/"];
  };

  return (
    <Menu
      theme='dark'
      mode='inline'
      style={{ marginTop: "64px" }}
      selectedKeys={getKey()}
      {...rest}
    >
      {privateRouter.map(
        (item) =>
          item.icon && (
            <Menu.Item key={item.path as string} icon={item.icon}>
              <Link to={item.path as string}>{item.name}</Link>
            </Menu.Item>
          )
      )}
    </Menu>
  );
};
export default MenuBar;
