import axios, { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

class Api {
  
  private static _instance: Api | null = null;
  
  private _basePath: string;
  private static _authorization: string | null = localStorage.getItem("Token");

  private constructor(basePath: string, authorization: string | null) {
		this._basePath = basePath;
		Api._authorization = authorization;
	}

  public static set authorization(value: string | null) {
    this._authorization = value;

    if (value) {
      localStorage.setItem("Token", value);
    } else {
      localStorage.removeItem("Token");
    }
  }

  public static get authorization() {
    return this._authorization;
  }


  public static async getInstance() {
    if (!this._instance) {
      const basePath = `http://localhost:8080`; // Cambia esta URL según sea necesario
      this._instance = new Api(basePath, null);
    }
    return this._instance;
  }


  public async request<RequestType, ResponseType>(config: AxiosRequestConfig) {
		const headers: RawAxiosRequestHeaders = {
			"Content-Type": "application/json",
			Authorization: Api._authorization ? `Bearer ${Api._authorization}` : "",
		};

		const configOptions: AxiosRequestConfig = {
			...config,
			baseURL: this._basePath,
			headers: headers,
		};

		const path = this._basePath + config.url;

		return axios<RequestType, AxiosResponse<ResponseType>>(path, configOptions);
	}
  

  // Método GET
  public get<RequestType, ResponseType>(config: AxiosRequestConfig) {
    const configOptions: AxiosRequestConfig = {
      ...config,
      method: "GET",
    };
    return this.request<RequestType, ResponseType>(configOptions);
  }

  // Método POST
  public post<RequestBodyType, ResponseBodyType>(
    data: RequestBodyType,
    options: AxiosRequestConfig
  ) {
    const configOptions: AxiosRequestConfig = {
      ...options,
      method: "POST",
      data,
    };
    return this.request<RequestBodyType, ResponseBodyType>(configOptions);
  }

  // Método DELETE
  public delete(options: AxiosRequestConfig) {
    const configOptions: AxiosRequestConfig = {
      ...options,
      method: "DELETE",
    };
    return this.request<void, void>(configOptions);
  }

  // Método PUT
  public put<RequestBodyType, ResponseBodyType>(
    data: RequestBodyType,
    options: AxiosRequestConfig
  ) {
    const configOptions: AxiosRequestConfig = {
      ...options,
      method: "PUT",
      data: data,
    };
    return this.request<RequestBodyType, ResponseBodyType>(configOptions);
  }

  // Método PATCH
  public patch<RequestBodyType, ResponseBodyType>(
    data: RequestBodyType,
    options: AxiosRequestConfig
  ) {
    const configOptions: AxiosRequestConfig = {
      ...options,
      method: "PATCH",
      data: data,
    };
    return this.request<RequestBodyType, ResponseBodyType>(configOptions);
  }
}

export default Api;
