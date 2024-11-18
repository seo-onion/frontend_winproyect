import { LoginRequest } from "../../interfaces/auth/LoginRequest";
import Api from "../../api";



export async function login(loginRequest: LoginRequest) {
 const api = await Api.getInstance();
 const response = await api.post<LoginRequest, string>(loginRequest, {
  url: "/auth/login",
 });
 Api.authorization = response.data;

 return response;
}