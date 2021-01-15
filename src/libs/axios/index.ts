import axiosBase, {
    AxiosRequestConfig,
    AxiosInterceptorManager,
    AxiosResponse,
    AxiosInstance,
} from "axios";

export default class Axios {
    public instance: AxiosInstance;

    public interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse<any>>;
    };

    public constructor(config: AxiosRequestConfig) {
        this.instance = axiosBase.create(config);
        this.interceptors = this.instance.interceptors;
    }
}
