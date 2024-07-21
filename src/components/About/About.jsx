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
          Hola, mi nombre es Juan, me podes decir Juanchi
          <br></br>
          Soy programador autodidacta y una persona que ama aprender.
          <br></br>
          {text ? (
            <b className={aboutCss["about-a"]} onClick={handleVerMas}>
              {" "}
              Ver más...
            </b>
          ) : (
            <span>
              A mis 22 años, me encuentro en un punto crucial donde quiero
              dedicarme a hacer cosas que realmente me apasionan. Sin embargo,
              siento que hay ciertas limitaciones que me frenan. Estas barreras
              son en parte de naturaleza financiera, social, o incluso interna,
              como el miedo al fracaso o la duda sobre mis propias capacidades.
              A pesar de estos desafíos, estoy decidido a encontrar maneras de
              superarlos. Quiero explorar mis intereses y descubrir cómo puedo
              integrarlos en mi vida de una manera significativa y sostenible.
              Sé que este proceso puede ser intimidante, pero también
              emocionante, ya que representa la oportunidad de crecer y
              desarrollarme tanto personal como profesionalmente.
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
