import Api from "../../api";
import { ServiceResponse } from "../../interfaces/serviceEntity/ServiceResponse";

export const getServiceById = async (id: number, token: string | null): Promise<ServiceResponse> => {
  const api = await Api.getInstance();

  Api.authorization = token; 

  try {
    const response = await api.get<void, ServiceResponse>({
      url: `/service/${id}`,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    throw error;
  }
};
