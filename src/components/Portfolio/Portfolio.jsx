import portfolioCss from "./portfolio.module.css";
import chatimg from "../../assets/chat.png";
import clicColor from "../../assets/clic-color.jpg";
import posterML from "../../assets/mercado-libre-logo.webp";
import posterPPT from "../../assets/paper-rock-scissors.jpg";
import world from "../../assets/world.png";
import github from "../../assets/github-vector.png";

export default function Portfolio() {
  const proyectos = [
    {
      title: "Buscador de Mercado Libre",
      subtitle:
        "TypeScript | React | CSS Modules| HTML5 | React Hooks | GitHub | APIs  ",
      poster: posterML,
      id: 1,
      world: "https://search-products-sand.vercel.app/",
      github: "https://github.com/bautistaJuan/React-search-products",
      desc: `He creado una aplicación web donde puedes buscar artículos variados y ver los detalles, precio, imagenes y garantía, solamente buscas el producto del que te gustaría ver los detalles y listo !!.
       Utilizo la API que provee Mercado Libre para desarrolladores.`,
    },
    {
      title: "Chat Online",
      subtitle:
        "TypeScript | Firebase | CSS3| HTML5 | Lodash | Custom-Elements| @Vaadin/router | State management | Parcel | GitHub | Node.JS | Express | Rest API | MVC ",
      poster: chatimg,
      id: 2,
      world: "https://chat-online-firebase.netlify.app/",
      github: "https://github.com/bautistaJuan/chat-online",
      desc: `He creado esta app sencilla donde puedes mandar mensajes online, ingresando tu nombre y tu email. 
        Para esta app he tenido que crear mi propia API para despues consumirla del lado del frontend.
      `,
    },
    {
      title: "PPT",
      subtitle:
        "TypeScript | CSS3| HTML5 | Custom-Elements| State management | Parcel | GitHub",
      poster: posterPPT,
      id: 3,
      world: "https://piedra-papel-tijera-cyan.vercel.app/",
      github: "https://github.com/bautistaJuan/Piedra-Papel-Tijera",
      desc: `
        He creado esta aplicación para jugar Piedra, Papel o Tijeras. Sinceramente me gusta el concepto del juego y me encanto desarrollar 
        esta aplicación, fue muy divertido :), por otra parte, la aplicación consta de 4 "paginas" 1: Bienvenida, 2: Instrucciones, 3: Juega y gana y 4: El resultado fianal.
      `,
    },
    {
      title: "Click on color",
      subtitle: "TypeScript | React | HTML5 | useState | GitHub",
      poster: clicColor,
      id: 4,
      world: "https://tap-colors.vercel.app/",
      github: "https://github.com/bautistaJuan/tap-colors",
      desc: `
       Este es un juego atrentenido donde tenes que presionar el color que dice la letra. Abajo tenes dos botones
       para elegir el correcto. El reloj corre hasta que consigas 15 puntos. Por cada error se descuentan 2 puntos.
      `,
    },
  ];

  return (
    <div id="portfolio" className={portfolioCss["portfolio-container"]}>
      <h1>Portfolio</h1>
      <div className={portfolioCss["portfolio-proyectos-container"]}>
        {proyectos.map(p => {
          return (
            <div key={p.id} className={portfolioCss["portfolio"]}>
              <img src={p.poster} width={300} height={300} />
              <div className={portfolioCss["portfolio-desc"]}>
                <h2>{p.title}</h2>
                <br />
                <h4>{p.subtitle}</h4>
                <p>{p.desc}</p>
              </div>
              <div className={portfolioCss["portfolio-links"]}>
                <a href={p.world}>
                  <img src={world} width={50} />
                </a>
                <a href={p.github}>
                  <img src={github} width={50} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
