import IRouter from "../../interfaces/router";

import { Login, User, Home, Error } from "../pages";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
    isAuthen: true,
  },
  {
    path: "/user",
    component: User,
    exact: true,
    isAuthen: true,
  },
  {
    path: "/login",
    component: Login,
    isAuthen: false,
    exact: true,
  },
  {
    path: "/error",
    component: Error,
    isAuthen: false,
    exact: true,
  },
] as IRouter[];
