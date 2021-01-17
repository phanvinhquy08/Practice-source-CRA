import React from "react";

const User = React.lazy(() => import("../components/containers/user"));
const Login = React.lazy(() => import("../components/containers/login"));
const Error = React.lazy(() => import("../components/containers/error"));
const Home = React.lazy(() => import("../components/containers/home"));

export { User, Login, Error, Home };
