import React from "react";
import ReactDOM from "react-dom";
import App from "./app/";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import jaJP from "antd/lib/locale-provider/ja_JP";
import "antd/dist/antd.css";
import "nprogress/nprogress.css";

import { store } from "./reducers";

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={jaJP}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
