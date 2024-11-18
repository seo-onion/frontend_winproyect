import ButtonComponent from "../components/ButtonComponent";
import LoginForm from "../components/LoginForm"
import { LoginRequest } from "../interfaces/auth/LoginRequest";
import { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Asegúrate de usar la ruta correcta
import { useNavigate } from "react-router-dom";

export default function Login(){
    
    const { login } = useAuth();
  const navigate = useNavigate();
    const [loginData, setLoginData] = useState<LoginRequest>({
      email: "",
      password: ""
    });


  async function loginHandler() {
    try {
      await login(loginData); 
      navigate("/main")
      
    } catch (error) {
      console.error(error); 
    }
  }

    return(
        <>
            <h1>LOGIN</h1>
            <LoginForm formData={loginData} setFormData={setLoginData} onSubmit={loginHandler} />
            <p>¿No tienes una cuenta?</p>
            <ButtonComponent textContent="Registrarse" goTo = "/auth/register"/> 
        </>
    )
}