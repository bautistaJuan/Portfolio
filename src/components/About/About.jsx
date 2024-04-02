import aboutCss from "./about.module.css";
import foto from "../../assets/foto-de-mi.jpg";
export default function About() {
  return (
    <div id="about" className={aboutCss["about-container"]}>
      <h3 className={aboutCss["about-h3"]}>About Me</h3>
      <p className={aboutCss["about-p"]}>
        Soy Juan Bautista Vega, tengo 22 años y soy Desarrollador Web Fullstack.
        Durante más de un año, me he dedicado al estudio y la práctica de
        diversas tecnologías web. Mi enfoque en la mejora continua me impulsa a
        buscar oportunidades donde pueda aplicar y compartir mis habilidades, y
        colaborar en equipos dinámicos. Estoy ansioso por enfrentar nuevos
        desafíos y contribuir al éxito de proyectos innovadores.
      </p>
      <img className={aboutCss["about-img"]} src={foto} alt="mi-foto" />
    </div>
  );
}
