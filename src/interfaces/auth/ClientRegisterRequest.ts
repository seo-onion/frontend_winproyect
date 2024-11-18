export interface ClientRegisterRequest{
    email: string,
    password: string,
    phoneNumber: string
    address: string,
    firstName: string,
    lastName: string,
    dni?: number
}