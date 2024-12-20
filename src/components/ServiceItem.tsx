import { ServiceResponse } from "../interfaces/serviceEntity/ServiceResponse";
import ButtonComponent from "./ButtonComponent";


const ServiceItem = (props: ServiceResponse) => {
    
    const {provider, description, name, address, suggestedPrice,avgRating, tags, id} = props
    
    return (
    
    <li>
      <h3>{name}</h3>
      <p><strong>Ofrecido por: {provider}</strong></p>  
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Suggested Price:</strong> ${suggestedPrice}</p>
      <p><strong>Average Rating:</strong> {avgRating} / 5</p>
      <div>
        <strong>Tags:</strong>
        <ul>
          {tags.map((tag, indice) => (
            <li key={indice}>{tag}</li>
          ))}
        </ul>
      </div>
    
    <ButtonComponent textContent="Mas informacion" goTo={`/service/${id}`} />
    </li>
  );
};

export default ServiceItem;
