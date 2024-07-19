import presentationCss from "./styles.module.css";

export default function Presentation() {
  return (
    <>
      <main className={presentationCss["main"]}>
        <h1 className={presentationCss["presentation-text"]}>
          Bienvenido a mi pagina web.
        </h1>
      </main>
    </>
  );
}
