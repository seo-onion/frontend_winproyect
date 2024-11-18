import { LoginRequest } from "../interfaces/auth/LoginRequest";

interface LoginProps {
  formData: LoginRequest;
  setFormData: React.Dispatch<React.SetStateAction<LoginRequest>>;
  onSubmit: () => void;
}

const LoginForm = (props: LoginProps) => {
  const { formData, setFormData, onSubmit } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            required
          />
        </div>
        <div>
          <input type="submit" value="Iniciar sesion" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
