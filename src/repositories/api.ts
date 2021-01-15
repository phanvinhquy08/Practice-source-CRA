import { AxiosRequestConfig, AxiosResponse } from "axios";

import Axios from "../libs/axios";

export default class Api extends Axios {
    public constructor(config: AxiosRequestConfig) {
        super(config);

        // this middleware is been called right before the http request is made.
        this.interceptors.request.use((param: AxiosRequestConfig) => {
            console.log("ozoo");
            return param;
        });

        // this middleware is been called right before the response is get it by the method that triggers the request
        this.interceptors.response.use((param: AxiosResponse) => ({
            ...param,
        }));
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
