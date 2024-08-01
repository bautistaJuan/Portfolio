import aboutCss from "./about.module.css";
import foto from "../../assets/foto-de-mi.png";
import { useState } from "react";
export default function About() {
  const [text, setText] = useState(true);
  const handleVerMas = () => {
    setText(!text);
  };

  return (
    <div id="about" className={aboutCss["about-container"]}>
      <h3 className={aboutCss["about-h3"]}>About Me</h3>
      <div className={aboutCss["about-presentation"]}>
        <p className={aboutCss["about-p"]}>
          Mi nombre es Juan
          <br></br>
          Soy programador autodidacta, me gusta tocar la guitarra y la leer.
          <br></br>
          {text ? (
            <b className={aboutCss["about-a"]} onClick={handleVerMas}>
              {" "}
              Ver más...
            </b>
          ) : (
            <span>
              Soy programador con experiencia en el desarrollo de sitios web y aplicaciones web utilizando tecnologías modernas. Mi enfoque principal es crear  eficientes, intuitivas y visualmente atractivas para mis clientes. Me apasiona la programación y siempre estoy buscando aprender y aplicar nuevas tecnologías para mejorar mis habilidades y resultados.
              <a
                className={aboutCss["about-a"]}
                onClick={handleVerMas}
                href="#about"
              >
                {" "}
                Ver menos...
              </a>
            </span>
          )}
        </p>
        <img
          id="img"
          className={aboutCss["about-img"]}
          src={foto}
          alt="mi-foto"
        />
      </div>
    </div>
  );
}
