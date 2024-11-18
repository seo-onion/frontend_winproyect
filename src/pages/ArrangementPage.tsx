import { useParams } from "react-router-dom";
import { createArrangement } from "../services/arrangement/createArrangement";
import { useAuth } from "../context/AuthContext";
import { ArrangementRequest } from "../interfaces/arrangement/ArrangementRequest";
import { useState } from "react";

const CreateArrangementPage = () => {
  const { idService } = useParams(); // Obtener el ID del servicio desde la URL
  const { token } = useAuth();
  const [formData, setFormData] = useState<ArrangementRequest>({
    price: 12
  }); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idService) {
      console.error("No service ID provided");
      return;
    }
    try {
      await createArrangement(Number(idService), formData, token);
      alert("Arrangement created successfully!");
    } catch (error) {
      console.error("Error creating arrangement:", error);
    }
  };

  return (
    <div>
        
      <h1>Create Arrangement</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>precio final</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: Number(e.target.value) })
            }
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateArrangementPage;
