import presentationCss from "./styles.module.css";

export default function Presentation() {
  return (
    <>
      <main className={presentationCss["main"]}>
        <div className={presentationCss["presentation-text"]}>
          <h1>
            ¡Hola! <span className={presentationCss["soyJuan"]}>Soy Juan.</span>
          </h1>
          <h2>Desarrollador web FullStack</h2>
        </div>
      </main>
    </>
  );
}
