import { RouteProps } from "react-router-dom";

export default interface IRoute extends RouteProps {
    isAuthen?: boolean;
}
