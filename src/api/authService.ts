import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
});

interface InternalAxiosRequestConfig extends AxiosRequestConfig {
    headers: {
        "X-Api-Key": string;
    };
}

api.interceptors.request.use(
    //@ts-ignore
    (config: AxiosRequestConfig) => {
        const newConfig: InternalAxiosRequestConfig = {
            ...config,
            headers: {
                ...config.headers,
                "X-Api-Key": process.env.REACT_APP_API_KEY as string,
            },
        };

        return newConfig;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default api;
