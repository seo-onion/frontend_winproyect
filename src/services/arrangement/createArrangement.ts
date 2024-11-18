import Api from "../../api";
import { ArrangementRequest } from "../../interfaces/arrangement/ArrangementRequest";

interface ArrangementResponse {
  uri: string; // La URI del nuevo recurso, según lo que retorna el backend
}

export const createArrangement = async (
  serviceId: number,
  arrangementRequestDto: ArrangementRequest,
  token: string | null
): Promise<void> => {
  const api = await Api.getInstance();

  Api.authorization = token;

  try {

    const response = await api.post<ArrangementRequest, ArrangementResponse>(
      arrangementRequestDto, 
      { 
        url: `/service/${serviceId}/arrangement`, 
      }
    );

    return response.data;

  } catch (error) {
    console.error("Error creating arrangement:", error);
    throw error;
  }
};
