import React from "react";
import ReactDOM from "react-dom";
import App from "./app/";
import { Provider } from "react-redux";
import 'antd/dist/antd.css';

import { store } from "./reducers";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
