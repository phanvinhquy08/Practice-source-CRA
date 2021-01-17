import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { BasicProps } from "antd/lib/layout/layout";
import styled from "styled-components";

const { Header } = Layout;

type Props = {} & BasicProps;

const AppHeader: React.FC<Props> = ({ ...rest }) => {
  return (
    <Header {...rest}>
      <Avatar icon={<UserOutlined />} />
    </Header>
  );
};

const HeaderContainer = styled(AppHeader)`
  background: white;
  text-align: right;
`;

export default HeaderContainer;
