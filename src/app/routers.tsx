import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import IRoute from "../interfaces/router";

const User = React.lazy(() => import("./containers/user"));
const Login = React.lazy(() => import("./containers/login"));
const Error = React.lazy(() => import("./containers/error"));
const Home = React.lazy(() => import("./containers/home"));
const Passenger = React.lazy(() => import("./containers/passenger"));

export default {
  HOME: {
    path: "/",
    name: "Home",
    component: Home,
    exact: true,
    isAuthen: true,
    icon: <HomeOutlined />,
  },
  LOGIN: {
    path: "/login",
    name: "Login",
    component: Login,
    exact: true,
    isAuthen: false,
  },
  USER: {
    path: "/user",
    name: "User",
    component: User,
    exact: true,
    isAuthen: true,
    icon: <UserOutlined />,
  },
  ERROR: {
    path: "/error",
    name: "Error",
    component: Error,
    exact: true,
    isAuthen: false,
  },
  PASSENGER: {
    path: "/passenger",
    name: "Passenger",
    component: Passenger,
    exact: true,
    isAuthen: true,
    icon: <UserSwitchOutlined />,
  },
} as { [key: string]: IRoute };
