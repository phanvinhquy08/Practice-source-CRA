import React from "react";
import { Layout, Menu } from "antd";
import { SiderProps } from "antd/lib/layout/Sider";
import { Link } from "react-router-dom";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

const { Sider } = Layout;

type Props = {} & SiderProps;

const SiderBar: React.FC<Props> = ({ ...rest }) => {
  return (
    <Sider breakpoint='md' collapsedWidth='0' {...rest}>
      <Menu theme='dark' mode='inline' style={{ marginTop: "64px" }}>
        <Menu.Item key='1' icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<UserOutlined />}>
          <Link to='/user'>User</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderBar;
