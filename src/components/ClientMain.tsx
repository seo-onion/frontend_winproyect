import ButtonComponent from "./ButtonComponent";

export default function ClientMain() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d12093.850165720243!2d-77.1133546637321!3d-12.05979734200133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d-12.0663842!2d-77.0562039!4m3!3m2!1d-12.066362699999999!2d-77.0563064!5e0!3m2!1ses-419!2spe!4v1731618418189!5m2!1ses-419!2spe"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>

      <ButtonComponent textContent="Buscar servicio" goTo="/services"/>
    </div>
  );
}
