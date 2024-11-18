import { EnterpriseRegisterRequest } from "../interfaces/auth/EnterpriseRegisterRequest";
import { BusinessSector } from "../enums/BusinessSector";
import { Size } from "../enums/Size";

interface RegisterEnterpriseProps {
  formData: EnterpriseRegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<EnterpriseRegisterRequest>>;
  onSubmit: () => void;
  title: string;
}

const RegisterEnterpriseForm = (props: RegisterEnterpriseProps) => {
  const { formData, setFormData, onSubmit, title } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "ruc" ? (value ? Number(value) : undefined) : value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Número de Teléfono</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="^\d{9}$"
            required
          />
        </div>

        <div>
          <label htmlFor="ruc">RUC</label>
          <input
            type="number"
            id="ruc"
            name="ruc"
            value={formData.ruc || ""}
            onChange={handleChange}
            required
            min={10000000000}
            max={99999999999}
          />
        </div>

        <div>
          <label htmlFor="name">Nombre de la Empresa</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            minLength={2}
            maxLength={100}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength={255}
          />
        </div>

        <div>
          <label htmlFor="businessSector">Sector Empresarial</label>
          <select
            id="businessSector"
            name="businessSector"
            value={formData.businessSector}
            onChange={handleSelectChange}
            required
          >
            <option value="">Selecciona un sector</option>
            {Object.entries(BusinessSector).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="size">Tamaño de la Empresa</label>
          <select
            id="size"
            name="size"
            value={formData.size}
            onChange={handleSelectChange}
            required
          >
            <option value="">Selecciona el tamaño</option>
            {Object.entries(Size).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>
    </>
  );
};

export default RegisterEnterpriseForm;
