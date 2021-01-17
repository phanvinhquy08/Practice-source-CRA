import React, { useEffect } from "react";
import NProgress from "nprogress";
import { Spin } from "antd";
import "nprogress/nprogress.css";

const Loading = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return <Spin size='large' />;
};

export default Loading;
