import { resolve } from "path";
/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 10:36:14
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 14:51:40
 * @FilePath: \epidvue\marina_vue\vite-project\src\util\http\http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { AxiosRequestConfig } from "axios";
import NProgress from "nprogress";
import { rejects } from "assert";

//设置请求头和请求路径
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 10000
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF8";
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      config.headers.token = token
    }
    return config;
  },
  (error) => {
    return error;
  }
)

// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code == 0) {
    sessionStorage.setItem("token", "");
  }
  return res
});

interface ResType<T> {
  code: number;
  data?: T;
  message: string;
  err?: string;
}

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  upload<T>(url: string, params?: unknown): Promise<ResType<T>>;
  download<T>(url: string, params?: unknown): void;
}

const mockHttp: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done();
          if (res.status === 200) {
            resolve(res.data);
          } else {
            resolve({ ...res.data, err: res.status });
          }
        })
        .catch((err) => {
          NProgress.done();
          reject(err);
        })
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done();
          if (res.status === 200) {
            resolve(res.data);
          } else {
            resolve({ ...res.data, err: res.status });
          }
        })
        .catch((err) => {
          NProgress.done();
          reject(err);
        })
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, file, {
          headers: { "Content-type": "multiart/form-data" },
        })
        .then((res) => {
          NProgress.done();
          if (res.status === 200) {
            resolve(res.data);
          } else {
            resolve({ ...res.data, err: res.status });
          }
        })
        .catch((err) => {
          NProgress.done();
          reject(err);
        })
    });
  },
  download(url) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none"
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  },
}

export default mockHttp
