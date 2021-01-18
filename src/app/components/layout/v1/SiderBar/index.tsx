import React from "react";
import { Layout } from "antd";
import { SiderProps } from "antd/lib/layout/Sider";

import MenuBar from "./Menu";

const { Sider } = Layout;

type Props = {} & SiderProps;

const SideBar: React.FC<Props> = ({ ...rest }) => {
  return (
    <Sider breakpoint='md' collapsedWidth='0' {...rest}>
      <MenuBar />
    </Sider>
  );
};

export default SideBar;
