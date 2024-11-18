import { useState } from "react";
import RegisterClient from "../components/RegisterClient";
import RegisterFreelancer from "../components/RegisterFreelancer";
import RegisterEnterprise from "../components/RegisterEnterprise";

import { ClientRegisterRequest } from "../interfaces/auth/ClientRegisterRequest";
import { FreelancerRegisterRequest } from "../interfaces/auth/FreelanceRegisterRequest";
import { EnterpriseRegisterRequest } from "../interfaces/auth/EnterpriseRegisterRequest";

import { useAuth } from "../context/AuthContext";

import { decodedToken } from "../utils/decodedToken";
import ButtonComponent from "../components/ButtonComponent";


export default function Register() {
  const [type, setType] = useState<string>("client");
  const {token, clientRegister, enterpriseRegister, freelancerRegister} = useAuth();


  const [clientData, setClientData] = useState<ClientRegisterRequest>({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    firstName: "",
    lastName: "",
    dni: undefined, 
  });

  const [freelancerData, setFreelancerData] =
    useState<FreelancerRegisterRequest>({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      dni: 0, 
      phoneNumber: 0,
      password: "",
    });

    const [enterpriseData, setEnterpriseData] =
    useState<EnterpriseRegisterRequest>({
      ruc: 0,
      email: "",
      password: "",
      name: "",
      phoneNumber: "",
      description: "",
      businessSector: "RESTAURANT", 
      size: "MICROEMPRESA"
    });


  async function clientHandleSubmit() {
    try {
      await clientRegister(clientData); 
      console.log(decodedToken(token))
    } catch (error) {
      console.error(error); 
    }
  }


  async function freelancerHandleSubmit() {
    try {
      await freelancerRegister(freelancerData); 
      console.log(decodedToken(token))
    } catch (error) {
      console.error(error); 
    }
  }

  async function enterpriceHandleSubmit() {
    try {
      await enterpriseRegister(enterpriseData); 
      console.log(decodedToken(token))
    } catch (error) {
      console.error(error); 
    }
  }

  return (
    <div>
      <h1>Registrarse como:</h1>
      <div>

        <button onClick={() => setType("client")}>Cliente</button>
        <button onClick={() => setType("freelancer")}>Freelancer</button>
        <button onClick={() => setType("enterprise")}>Empresa</button>
      </div>

      {type === "client" && (
        <RegisterClient
          title="Cliente"
          formData={clientData}
          setFormData={setClientData}
          onSubmit={clientHandleSubmit} 
        />
      )}
      {type == "freelancer" && (
        <RegisterFreelancer
          title="Freelancer"
          formData={freelancerData}
          setFormData={setFreelancerData}
          onSubmit={freelancerHandleSubmit}
        />
      )}

      {type == "enterprise" && (
        <RegisterEnterprise
          title="Enterprise"
          formData={enterpriseData}
          setFormData={setEnterpriseData}
          onSubmit={enterpriceHandleSubmit}
        />
      )}
      <br></br>
      <ButtonComponent textContent="Iniciar secion" goTo="/" />
    </div>
  );
}
