import servicesCss from "./services.module.css";
import diseñoWeb from "../../assets/web_desing.png";
import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.png";

export function Products() {
  let info = [
    {
      img: diseñoWeb,
      title: "Diseño Web",
      description:
        "Puedo ayudarte a plasmar tus ideas en una página web, enfocándome en el diseño responsive y las animaciones de las interacciones. Me baso en el paradigma mobile-first y utilizo HTML, JavaScript y CSS. Me mantengo actualizado sobre nuevos paradigmas de diseño y las capacidades visuales de los componentes para mejorar la interactividad de los usuarios al navegar por mis páginas web.",
      id: "services-interfaces",
    },
    {
      img: backend,
      title: "Backend",
      description:
        "Como Desarrollador FullStack, estoy encargado de crear y mantener mis propias API REST, diseñadas para ser fácilmente consumidas por el Frontend. Empleo el esquema MVC (Modelo/Vista/Controlador) para organizar la lógica de mis aplicaciones. Utilizo Postman como herramienta principal para diseñar y probar los endpoints, mientras que para la implementación, confío en Node.js junto con Express, aprovechando su robustez y eficiencia en el desarrollo web",
      id: "services-backend",
    },
    {
      img: frontend,
      title: " Frontend",
      description:
        "Desarrollador Frontend apasionado por la implementación de soluciones innovadoras, mi enfoque se centra en el diseño intuitivo y la experiencia del usuario. Con habilidades sólidas en HTML, CSS y JavaScript, así como en el uso de bibliotecas y herramientas de vanguardia, estoy comprometido a llevar cada proyecto al siguiente nivel de excelencia técnica y estética.",
      id: "services-frontend",
    },
  ];
  return (
    <>
      {info.map((inf, index) => {
        return (
          <div key={index} className={servicesCss[inf.id]}>
            <img src={inf.img} alt={inf.title} />
            <div className={servicesCss["services-text"]}>
              <h4>{inf.title}</h4>
              <span>{inf.description}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
