import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";
import Services from "./components/Servicios/Services";
import Tecnologias from "./components/Tecnologias/Tecnologias";
function App() {
  return (
    <div className="app-container">
      <Header />
      <Presentation />

      <About />
      <Services />
      <Tecnologias />
      <section id="portfolio">
        <h1>Portfolio</h1>
        <p>Bienvenido a mi página de inicio.</p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta
          laborum voluptate, architecto, iure veniam nihil, eum commodi
          exercitationem eos porro reprehenderit numquam officia totam fugit
          quasi ea tenetur quo! Id cupiditate fugiat voluptatem distinctio ea
          autem iste libero laudantium consectetur iusto blanditiis, maxime
          exercitationem eos porro reprehenderit numquam officia totam fugit
          quasi ea tenetur quo! Id cupiditate fugiat voluptatem distinctio ea
          autem iste libero laudantium consectetur iusto blanditiis, maxime
          exercitationem eos porro reprehenderit numquam officia totam fugit
          quasi ea tenetur quo! Id cupiditate fugiat voluptatem distinctio ea
          autem iste libero laudantium consectetur iusto blanditiis, maxime
          exercitationem eos porro reprehenderit numquam officia totam fugit
          quasi ea tenetur quo! Id cupiditate fugiat voluptatem distinctio ea
          autem iste libero laudantium consectetur iusto blanditiis, maxime
          exercitationem eos porro reprehenderit numquam officia totam fugit
          quasi ea tenetur quo! Id cupiditate fugiat voluptatem distinctio ea
          autem iste libero laudantium consectetur iusto blanditiis, maxime
          totam delectus, quasi adipisci. Dicta provident dolor fugiat, maxime
          esse dolores deserunt, totam laudantium sequi voluptates pariatur
          error qui! Dignissimos mollitia et inventore dolore consectetur
          commodi eaque neque iure enim libero cum consequuntur, a id, odit ad,
          deserunt quaerat reprehenderit rerum ut omnis numquam unde eum sequi
          fuga. Perferendis quam quisquam inventore, aut nobis quibusdam
          sapiente.
        </p>
      </section>
      <section id="contact">
        <h1>Contacto</h1>
        <p>Bienvenido a mi página de inicio.</p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta
          laborum voluptate, architecto, iure veniam nihil, eum commodi
          exercitationem eos porro reprehenderit numquam officia totam fugit
          quasi ea tenetur quo! Id cupiditate fugiat voluptatem distinctio ea
          autem iste libero laudantium consectetur iusto blanditiis, maxime
          totam delectus, quasi adipisci. Dicta provident dolor fugiat, maxime
          esse dolores deserunt, totam laudantium sequi voluptates pariatur
          error qui! Dignissimos mollitia et inventore dolore consectetur
          commodi eaque neque iure enim libero cum consequuntur, a id, odit ad,
          deserunt quaerat reprehenderit rerum ut omnis numquam unde eum sequi
          fuga. Perferendis quam quisquam inventore, aut nobis quibusdam
          sapiente.
        </p>
      </section>
    </div>
  );
}

export default App;
