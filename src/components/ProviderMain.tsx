import ButtonComponent from "./ButtonComponent";

export default function ProviderMain(){
    




    return(<>
    <div>
        <h2>Buzon</h2>
        <div>
            Acá deberías salir los servicios solicitados
        </div>
        <ButtonComponent textContent="Agregar un nuevo servicio" goTo="/service"/>
    </div>
    </>)
}