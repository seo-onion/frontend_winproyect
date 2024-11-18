import { ServiceTag } from "../../enums/ServiceTags";

export interface ServiceRequest{
    description: string,
    name: string,
    address: string,
    suggestedPrice: number,
    tags: ServiceTag[];
}