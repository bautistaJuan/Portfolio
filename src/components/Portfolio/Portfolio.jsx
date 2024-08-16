import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import animes from "../../assets/animes.jpg";
import clima from "../../assets/clima.jpg";
import posterML from "../../assets/mercado-libre-logo.webp";
import posterPPT from "../../assets/paper-rock-scissors.jpg";
import world from "../../assets/world.png";
import github from "../../assets/github-vector.png";

export default function Portfolio() {
  const proyectos = [
    {
      title: "Una app para ver clima",
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
      title: "PIEDRA PAPEL O TIJERA",
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
      title: " SCROLL INFINITO DE ANIMES",
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
    <>
      <div
        className="text-center text-white bg-black flex flex-col justify-center items-center"
        ref={ref}
        id="portfolio"
      >
        <h1 className="text-[#0FA0C7]  font-extrabold text-[2.5rem] text-center mb-14 pt-[6rem]">
          Portfolio
        </h1>
        <div className="w-10/12 px-5 pb-32 justify-center place-items-center grid 2xl:grid-cols-3 :grid-cols-2  gap-12 min-h-screen  ">
          {proyectos.map(p => {
            return (
              <motion.div
                key={p.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, delay: p.id * 0.2 }}
                className="flex flex-col items-center  w-[21rem] sm:w-[26rem] h-[30rem] sm:h-[32rem]"
              >
                <img
                  className="w-full h-[15.9rem] sm:h-[20rem]"
                  src={p.poster}
                />
                <div className="flex flex-col p-5 flex-grow">
                  <h2 className="mb-5 font-semibold">{p.title}</h2>
                  <h4 className="font-cursive text-[#ffff]">{p.subtitle}</h4>
                </div>
                <div className="flex self-end w-full items-center gap-1">
                  <a
                    href={p.world}
                    className="w-1/2 min-h-full  flex justify-center bg-[#2766b3] p-2"
                  >
                    <img src={world} width={50} />
                  </a>
                  <a
                    href={p.github}
                    className=" w-1/2 min-h-full flex justify-center bg-[#0f151b] p-2"
                  >
                    <img src={github} width={50} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
