import { AxiosRequestConfig, AxiosResponse } from "axios";
import NProgress from "nprogress";

import Axios from "../libs/axios";
import history from "../libs/history";
NProgress.configure({ showSpinner: false });
NProgress.set(0.4);

export default class Api extends Axios {
  public constructor(config: AxiosRequestConfig) {
    super(config);

    // this middleware is been called right before the http request is made.
    this.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        NProgress.start();
        return config;
      },
      (error) => Promise.reject(error)
    );

    // this middleware is been called right before the response is get it by the method that triggers the request
    this.interceptors.response.use(
      (response: AxiosResponse) => {
        NProgress.done();
        return response;
      },
      (error) => {
        NProgress.done();
        console.log(error);
        if (error) {
          history.push("/error");
        }
        return Promise.reject(error);
      }
    );
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.get(url, config);
  }

  public post<T, B>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.post(url, data, config);
  }

  public put<T, B>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.put(url, data, config);
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.delete(url, config);
  }
}
