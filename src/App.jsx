import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import "./index.css";
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
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
