import servicesCss from "./services.module.css";
import { Products } from "./Products";
export default function Services() {
  return (
    <div id="services" className={servicesCss["services-container"]}>
      <h3 className={servicesCss["services-h3"]}>Mis servicios</h3>
      <div className={servicesCss["services-products"]}>
        <Products />
      </div>
    </div>
  );
}
