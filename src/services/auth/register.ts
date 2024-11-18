import { ClientRegisterRequest } from "../../interfaces/auth/ClientRegisterRequest";
import { FreelancerRegisterRequest } from "../../interfaces/auth/FreelanceRegisterRequest";
import { EnterpriseRegisterRequest } from "../../interfaces/auth/EnterpriseRegisterRequest";
import Api from "../../api";

export async function registerClient(clientRegister: ClientRegisterRequest) {

 const api = await Api.getInstance();
 const response = await api.post<ClientRegisterRequest, string>(clientRegister, {
  url: "/auth/register/client",
 });
 Api.authorization = response.data;
 return response;
}


export async function registerFreelancer(freelancerRegister: FreelancerRegisterRequest) {

    const api = await Api.getInstance();
    const response = await api.post<FreelancerRegisterRequest, string>(freelancerRegister, {
     url: "/auth/register/freelancer",
    });
    Api.authorization = response.data;
    return response;
}


export async function registerEnterprise(enterpriseRegister: EnterpriseRegisterRequest) {

    const api = await Api.getInstance();
    const response = await api.post<EnterpriseRegisterRequest, string>(enterpriseRegister, {
     url: "/auth/register/enterprise",
    });
    Api.authorization = response.data;
    return response;
}