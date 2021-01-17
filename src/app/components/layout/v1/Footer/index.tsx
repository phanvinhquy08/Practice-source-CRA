import React from "react";
import { Layout } from "antd";
import { BasicProps } from "antd/lib/layout/layout";

const { Footer } = Layout;

type Props = {} & BasicProps;

const AppFooter: React.FC<Props> = ({ ...rest }) => {
  return (
    <Footer style={{ textAlign: "center" }} {...rest}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};

export default AppFooter;
