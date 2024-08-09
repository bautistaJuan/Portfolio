import presentationCss from "./styles.module.css";
import ftPresentation from "../../assets/IMG-20240807-WA0004.jpg";
export default function Presentation() {
  return (
    <>
      <main className={presentationCss["main"]}>
        <h1 className={presentationCss["main_h1"]}>
          Hola, soy
          <br />
          <span className={presentationCss["main_h1_span"]}>Juan Vega</span>
        </h1>
        <div className={presentationCss["main_div-h2"]}>
          <h2 className={presentationCss["main_div_h2"]}>FRONT-END DEV</h2>
        </div>
        <img className={presentationCss["main_img"]} src={ftPresentation} />
      </main>
    </>
  );
}
