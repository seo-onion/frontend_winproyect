import { useEffect, useState, useRef } from "react";
import { getAllServices } from "../services/serviceEntity/getAllservice"; // Asegúrate de importar tu servicio
import { useAuth } from "../context/AuthContext";
import { ServiceResponse } from "../interfaces/serviceEntity/ServiceResponse";
import ServiceItem from "../components/ServiceItem";

const ServicesList = () => {
  const { token } = useAuth();
  const [Content, setContent] = useState<ServiceResponse[]>([]); // Usar el tipo adecuado
  const [page, setPage] = useState(0); // Página actual para cargar más servicios
  const [isLoading, setIsLoading] = useState(false); // Flag para evitar solicitudes múltiples
  const containerRef = useRef<HTMLDivElement | null>(null); // Referencia al contenedor de la lista

  useEffect(() => {
    
    const fetchData = async () => {

      setIsLoading(true); 
      try {
        const response = await getAllServices(page, 10, token);
        if (response.size  > 0) {
          setContent((prevContent) => [...prevContent, ...response.content]); 
        }
        
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData(); 
  }, [page]); 

  
  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
  
      // Agregar un pequeño margen para asegurarse de que estamos cerca del final
      const buffer = 1; // 10 píxeles de margen
      const nearBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + buffer;
  
      // Verificamos si hemos llegado cerca del final del contenedor
      if (nearBottom && !isLoading) {

        setPage((prevPage) => prevPage + 1); // Incrementamos la página
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll); // Agregar el evento de scroll
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll); // Eliminar el evento al desmontar
      }
    };
  }, [isLoading]);



  return ( 
    <>
      <h1>Buscar servicio</h1>
      <input type="text" name="" id="" />
      <div ref={containerRef} style={{ height: "500px", overflowY: "auto" }} >
        <ol>
          {Content.length > 0 ? (
            Content.map((element, index) => (
              <ServiceItem
                key={index}
                provider={element.provider}
                description={element.description}
                name={element.name}
                address={element.address}
                suggestedPrice={element.suggestedPrice}
                avgRating={element.avgRating}
                tags={element.tags}
              />
            ))
          ) : (
            <p>No services found</p>
          )}
        </ol>
        {isLoading && <p>Loading more...</p>} {/* Mostrar un mensaje cuando estamos cargando más */}
      </div>
    </>
  
  );
};

export default ServicesList;
