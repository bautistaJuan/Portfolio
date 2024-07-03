import aboutCss from "./about.module.css";
import foto from "../../assets/foto-de-mi.png";
export default function About() {
  return (
    <div id="about" className={aboutCss["about-container"]}>
      <h3 className={aboutCss["about-h3"]}>About Me</h3>
      <div className={aboutCss["about-presentation"]}>
        <p className={aboutCss["about-p"]}>
          Durante más de dos año me he dedicado a aprender y entender todo sobre
          el desarrollo web, teniendo en cuenta que aún no es suficiente, he
          aprendido mucho. Mi enfoque en la mejora continua me impulsa a buscar
          oportunidades donde pueda aplicar y compartir mis habilidades y
          colaborar en equipos dinámicos. Estoy ansioso por enfrentar nuevos
          desafíos y contribuir al éxito de proyectos innovadores.
        </p>
        <img className={aboutCss["about-img"]} src={foto} alt="mi-foto" />
      </div>
    </div>
  );
}
