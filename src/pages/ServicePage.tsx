import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getServiceById } from "../services/serviceEntity/getService";
import { ServiceResponse } from "../interfaces/serviceEntity/ServiceResponse";
import ButtonComponent from "../components/ButtonComponent";

export default function ServicePage(){
    const { idService } = useParams(); // Obtener el ID del servicio desde la URL
  const { token } = useAuth();
  const [formData, setFormData] = useState<ServiceResponse>();
  
  
  useEffect( ()=> {
    async function fetchData() {
        try {
            const response = await getServiceById(Number(idService), token)
            setFormData(response)
        } catch(e){
            console.log(e)
        }   
    }
    fetchData()
  }, [])

    return(<>
        <div>
            <h2>Solicitar servicio</h2>

            <p>Ofrecido por: {formData?.provider}</p>
            <p><strong>{formData?.name}</strong></p>
            <p>descripcion: {formData?.description}</p>
            <p>direccion: {formData?.address}</p>
            <p>precio sugerido: {formData?.suggestedPrice}</p>
            <p>rating: {formData?.avgRating}</p>
            

            <div>
                <h3>Comentarios</h3>
                Que alguien más haga esta mrda XD
            </div>
            
            <ButtonComponent textContent="Solicitar servicio" goTo={`/service/${idService}/arrangement`}/>
        </div>

    </>)
}