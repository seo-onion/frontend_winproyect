import { FreelancerRegisterRequest } from "../interfaces/auth/FreelanceRegisterRequest";

interface RegisterFreelancerProps {
  formData: FreelancerRegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<FreelancerRegisterRequest>>;
  onSubmit: () => void;
  title: string;
}

const RegisterFreelancerForm = (props: RegisterFreelancerProps) => {
  const { formData, setFormData, onSubmit, title } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "dni" ? (value ? Number(value) : undefined) : value,
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
            value={formData.email || ''}
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
            value={formData.password || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Número de Teléfono</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="firstName">Primer Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dni">DNI</label>
          <input
            type="number"
            id="dni"
            name="dni"
            value={formData.dni || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>
    </>
  );
};

export default RegisterFreelancerForm;
