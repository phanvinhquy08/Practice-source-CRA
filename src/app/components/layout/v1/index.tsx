import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

import SideBar from "./SiderBar";
import Header from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

const AppLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <SideBar />
      <LayoutWrapper>
        <Header />
        <MainContent>
          <ContentWrapper>{children}</ContentWrapper>
        </MainContent>
        <Footer />
      </LayoutWrapper>
    </Layout>
  );
};

const ContentWrapper = styled.div`
  height: 100%;
`;

const MainContent = styled(Content)`
  margin: 24px 24px;
  flex: 1;
`;

const LayoutWrapper = styled(Layout)`
  min-height: 100vh;
`;

export default AppLayout;
