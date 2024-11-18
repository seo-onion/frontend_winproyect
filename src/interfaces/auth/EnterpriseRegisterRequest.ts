
export interface EnterpriseRegisterRequest {
  email: string;
  password: string;
  phoneNumber: string;
  ruc: number;
  name: string;
  description?: string;
  businessSector: string;
  size: string;
}
