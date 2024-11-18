import { createContext, useContext, ReactNode } from "react";
import {useStorageState} from "../hooks/useStorageState";
import { ClientRegisterRequest } from "../interfaces/auth/ClientRegisterRequest";
import { FreelancerRegisterRequest } from "../interfaces/auth/FreelanceRegisterRequest";
import { EnterpriseRegisterRequest } from "../interfaces/auth/EnterpriseRegisterRequest";
import { LoginRequest } from "../interfaces/auth/LoginRequest";
import Api from "../api";
import { login } from "../services/auth/login";
import { useEffect } from "react";
import {
  registerClient,
  registerEnterprise,
  registerFreelancer,
} from "../services/auth/register";

// Definimos los tipos para el contexto de autenticación
interface AuthContextType {
  clientRegister: (clientRegister: ClientRegisterRequest) => Promise<void>;
  freelancerRegister: (
    freelancerRegister: FreelancerRegisterRequest
  ) => Promise<void>;
  enterpriseRegister: (
    enterpriseRegister: EnterpriseRegisterRequest
  ) => Promise<void>;
  login: (loginRequest: LoginRequest) => Promise<void>;
  token: string | null;
  setToken: (token: string) => void;
  isLoading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function loginHandler(
  loginRequest: LoginRequest,
  setSession: (value: string) => void
) {
  const response = await login(loginRequest);
  console.log(response.data)
  setSession(response.data);
}

async function signupClientHandler(
  signupRequest: ClientRegisterRequest,
  setSession: (value: string) => void
) {
  const response = await registerClient(signupRequest);
  
  setSession(response.data);
}

async function signupEnterpriseHandler(
  signupRequest: EnterpriseRegisterRequest,
  setSession: (value: string) => void
) {
  const response = await registerEnterprise(signupRequest);
  setSession(response.data);
}

async function signupFreelancerHandler(
  signupRequest: FreelancerRegisterRequest,
  setSession: (value: string) => void
) {
  const response = await registerFreelancer(signupRequest);
  setSession(response.data);
}

// Proveedor del AuthContext
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Usamos el hook personalizado para manejar el token con localStorage
  const [[isLoading, token], setToken] = useStorageState(
    "Token"
  );
  
  useEffect(() => {
    console.log("Token changed:", token); // Verifica si el token es válido
  }, [token]);


  const login = async (loginRequest: LoginRequest) => {
    await loginHandler(loginRequest, setToken);
  };


  const clientRegister = async (signupRequest: ClientRegisterRequest) => {
    await signupClientHandler(signupRequest, setToken);
  };

  const freelancerRegister = async (signupRequest: FreelancerRegisterRequest) => {
    await signupFreelancerHandler(signupRequest, setToken);
  };

  const enterpriseRegister = async (signupRequest: EnterpriseRegisterRequest) => {
    await signupEnterpriseHandler(signupRequest, setToken);
  };

  const logout = () => {
    setToken(null); // Limpiar la sesión

    Api.getInstance().then(() => (Api.authorization = null)); // Eliminar la autorización del API
  };
  return (
    <AuthContext.Provider value={{ token, setToken, logout, login, clientRegister, enterpriseRegister, freelancerRegister, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
