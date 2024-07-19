import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import portfolioCss from "./portfolio.module.css";
import animes from "../../assets/animes.jpg";
import clima from "../../assets/clima.jpg";
import posterML from "../../assets/mercado-libre-logo.webp";
import posterPPT from "../../assets/paper-rock-scissors.jpg";
import world from "../../assets/world.png";
import github from "../../assets/github-vector.png";

export default function Portfolio() {
  const proyectos = [
    {
      title: "Clima: ver temperatura actual",
      subtitle:
        "TypeScript | React | Tailwind CSS | HTML5 | React Hooks | GitHub | APIs  ",
      poster: clima,
      id: 0,
      world: "https://weather-app--psi.vercel.app/",
      github: "https://github.com/bautistaJuan/weather-app",
      desc: `He creado una app para ver el clima, podes leer la informacion del clima de todo el mundo ya que tiene una barra de búsqueda para ello.
       para esta aplicación tuve que consumir la api de openweathermap y la estructure según mis necesidades. 
        Tiene un efecto que hace que el fondo de la página cambie si la temperatura supera los 25°.

      `,
    },
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
      title: "PPT",
      subtitle:
        "TypeScript | CSS3| HTML5 | Custom-Elements| State management | Parcel | GitHub",
      poster: posterPPT,
      id: 2,
      world: "https://piedra-papel-tijera-cyan.vercel.app/",
      github: "https://github.com/bautistaJuan/Piedra-Papel-Tijera",
      desc: `
        He creado esta aplicación para jugar Piedra, Papel o Tijeras. Sinceramente me gusta el concepto del juego y me encanto desarrollar 
        esta aplicación, fue muy divertido :), por otra parte, la aplicación consta de 4 "paginas" 1: Bienvenida, 2: Instrucciones, 3: Juega y gana y 4: El resultado fianal.
      `,
    },
    {
      title: "Lista de animes: Efecto Scroll Infinito",
      subtitle:
        "TypeScript | React | Next.js | HTML5 | Tailwind CSS | GitHub | Framer Motion",
      poster: animes,
      id: 4,
      world: "https://anime-infinity-scroll-murex.vercel.app/",
      github: "https://github.com/bautistaJuan/anime-infinity-scroll",
      desc: `Esta página es para aquellas personas que se consideran fan del anime, contiene una colección de los 
        mejores animes de todos los tiempos.
        Cree esta página con la intención de practicar un poco con el framework Next.js, utilice un efecto que me gusto mucho de Framer Motion. 
      `,
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="portfolio"
      className={portfolioCss["portfolio-container"]}
      ref={ref}
    >
      <h1>Portfolio</h1>
      <div className={portfolioCss["portfolio-proyectos-container"]}>
        {proyectos.map(p => {
          return (
            <motion.div
              key={p.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: p.id * 0.2 }}
              className={portfolioCss["portfolio"]}
            >
              <img
                className={portfolioCss["portfolio-img"]}
                src={p.poster}
                width={300}
                height={300}
              />
              <div className={portfolioCss["portfolio-desc"]}>
                <h2 className={portfolioCss["portfolio-proyectos-title"]}>
                  {p.title}
                </h2>
                <h4 className={portfolioCss["portfolio-proyectos-subtitle"]}>
                  {p.subtitle}
                </h4>
                <p className={portfolioCss["portfolio-desc-text"]}>{p.desc}</p>
              </div>
              <div className={portfolioCss["portfolio-links"]}>
                <a href={p.world}>
                  <img src={world} width={50} />
                </a>
                <a href={p.github}>
                  <img src={github} width={50} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
