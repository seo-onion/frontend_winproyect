import { TagResponse } from "../tag/TagResponse";

export interface ServiceResponse {
    name: string;
    provider: string;
    description: string;
    address: string;
    suggestedPrice: number;  // Usamos 'number' en vez de 'Double'
    avgRating: number;       // Usamos 'number' en vez de 'Float'
    tags: Array<TagResponse>;  // 'Set' para almacenar un conjunto de objetos TagDtoResponse
}
