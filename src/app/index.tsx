import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spin } from "antd";
import styled from "styled-components";

import { Login, Error } from "./pages";
import AppLayOut from "./components/layout";
import router from "./router";

const App: React.FC = () => {
  return (
    <div className='App' style={{ minHeight: "100vh" }}>
      <React.Suspense
        fallback={
          <Loading>
            <Spin size='large' />
          </Loading>
        }
      >
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/error' component={Error} />
          <Route
            render={() => {
              return (
                <AppLayOut ver='v1'>
                  <React.Suspense
                    fallback={
                      <Loading>
                        <Spin size='large' />
                      </Loading>
                    }
                  >
                    <Switch>
                      {router
                        .filter((x) => x.isAuthen)
                        .map((route, index) => (
                          <Route {...route} key={index} />
                        ))}
                      <Redirect
                        to={{
                          pathname: "/error",
                          state: { name: "404" },
                        }}
                      />
                    </Switch>
                  </React.Suspense>
                </AppLayOut>
              );
            }}
          />
        </Switch>
      </React.Suspense>
    </div>
  );
};

const Loading = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
