// import Header from "./components/Header/Header";
// import Presentation from "./components/Presentation/Presentation";
// import About from "./components/About/About";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Contact from "./components/Contact/Contact";
// import Services from "./components/Servicios/Services";
// import Tecnologias from "./components/Tecnologias/Tecnologias";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col text-center items-center bg-blue-500 text-white justify-center h-screen">
      <h1 className="text-[4rem]">Hola</h1>
      <h1 className="text-[3rem]">Ya podes ver mi portfolio actualizado ;)</h1>
      <a
        className="text-[2rem] border-b-2 leading-none text-orange-500"
        href="https://juan-bautista.vercel.app/"
      >
        Acá
      </a>
      <p className="mt-4 text-gray-400">Perdon por las molestias</p>
      {/* <Header />
      <Presentation />
      <About /> */}
      {/* <Services /> */}
      {/* <Tecnologias />
      <Portfolio />
      <Contact /> */}
    </div>
  );
}

export default App;
