import React from "react";
import ReactDOM from "react-dom";
import App from "./app/";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { Router } from "react-router-dom";
import jaJP from "antd/lib/locale-provider/ja_JP";

import "antd/dist/antd.css";
import "nprogress/nprogress.css";

import { store } from "./reducers";
import history from "./libs/history";

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={jaJP}>
      <Router history={history}>
        <App />
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
