import presentationCss from "./styles.module.css";

export default function Presentation() {
  return (
    <>
      <main className={presentationCss["main"]}>
        <div className={presentationCss["presentation-text"]}>
          <h1>Bienvenido</h1>
          <h2 className={presentationCss["fullstack"]}>Mi nombre es Juan</h2>
        </div>
      </main>
    </>
  );
}
