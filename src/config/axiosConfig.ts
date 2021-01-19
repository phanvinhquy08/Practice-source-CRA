import { AxiosRequestConfig } from "axios";

const url1 = "https://api.instantwebtools.net/v1";
const url2 = "https://reqres.in";

const authToken = localStorage.getItem("token");
export const config: AxiosRequestConfig = {
  baseURL: url1,
  headers: {
    Authorization: authToken ? `Bearer ${authToken}` : undefined,
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
};
