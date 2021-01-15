import { AxiosRequestConfig } from "axios";

const authToken = localStorage.getItem("token");
export const config: AxiosRequestConfig = {
    baseURL: "https://reqres.in",
    headers: {
        Authorization: authToken ? `Bearer ${authToken}` : null,
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
};