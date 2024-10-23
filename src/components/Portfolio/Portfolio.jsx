import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import posterML from "../../assets/mercado-libre-logo.png";
import world from "../../assets/world.png";
import github from "../../assets/github-vector.png";
import chat from "../../assets/chat-app.png";
import ppt from "../../assets/ppt.jpg";
import bleach from "../../assets/bleach-appp.png";

export default function Portfolio() {
  const proyectos = [
    {
      title: "Bleach: Thousand Year Blood War",
      subtitle: "TypeScript | React | Framer Motion | TailwindCSS ",
      poster: bleach,
      id: 0,
      world: "https://bleach-personajes.vercel.app/",
      github: "https://github.com/bautistaJuan/bleach-personajes",
      desc: `Clone una seccion de la página oficial de Bleach, con la intención de traducir el contenido al Español. Esta SPA muestra los personajes del anime y un poco de información.
      Tiene efectos de animación con Framer Motion y se adapta a diferentes tamaños de pantalla.`,
    },
    {
      title: "Chat Online",
      subtitle: "TypeScript | HTML5 | Firebase | Firestore | API | Vercel CLI",
      poster: chat,
      id: 1,
      world: "https://app-chat-topaz.vercel.app",
      github: "https://github.com/bautistaJuan/app-chat",
      desc: `En esta webapp simple, permite registrar a usuarios solo con su nombre y su mail para poder luego verificarlos ante la base de datos que esta montada con Firestore y Firebase RealTime.`,
    },
    {
      title: "Buscador de Mercado Libre",
      subtitle: "TypeScript | React | CSS Modules| HTML5 | APIs | Responsive",
      poster: posterML,
      id: 2,
      world: "https://search-products-sand.vercel.app/",
      github: "https://github.com/bautistaJuan/React-search-products",
      desc: `Buscador de articulos utilizando la Api publica y el diseño de UI de MercadoLibre. Aplicando conocimientos de custom hooks, componentes funcionales y diseño responsive.`,
    },
    {
      title: "Piedra Papel o Tijera",
      subtitle: "JavaScript | SPA | HTML5 | CSS | Custom-Elements | Responsive",
      poster: ppt,
      id: 3,
      world: "https://ppt-dwf.vercel.app/",
      github: "https://github.com/bautistaJuan/ppt-dwf",
      desc: `El clásico juego de piedra papel o tijera, creado con JavaScript, HTML5, CSS. Permite jugar contra la computadora con SPA, incluyendo una pantalla de inicio, juego, y resultados.`,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div
        className="text-center text-white bg-black flex flex-col justify-center items-center"
        id="portfolio"
      >
        <h1 className="text-[#0FA0C7]  font-extrabold text-[3rem] text-center mb-14 pt-[6rem]">
          Portfolio
        </h1>
        <div
          ref={ref}
          className="w-10/12 px-5 pb-32 justify-center place-items-center grid 2xl:grid-cols-3 lg:grid-cols-2  gap-12 min-h-screen"
        >
          {proyectos.map((p, i) => {
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 0 }}
                animate={inView ? { opacity: 3, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "keyframes",
                  delay: i * 0.3,
                }}
                className="flex flex-col items-center w-[21rem] sm:w-[26rem] border border-gray-600 rounded-lg p-4 bg-gray-800"
                style={{ height: "100%" }}
              >
                <img
                  className="w-full h-[15.9rem] sm:h-[20rem] transition-transform duration-300"
                  src={p.poster}
                  alt={`${p.title} poster`}
                />
                <div className="flex flex-col flex-grow">
                  <h2 className="mb-5 text-[1.2rem] font-semibold text-white">
                    {p.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-4">{p.desc}</p>
                  <span className="text-lg text-gray-400">{p.subtitle}</span>
                </div>
                <div className="flex w-full justify-between">
                  <a
                    href={p.world}
                    className="w-[45%] flex justify-center items-center bg-[#2766b3] p-2 rounded-md shadow-inner hover:bg-[#000000]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={world} alt="world link" width={40} />
                  </a>
                  <a
                    href={p.github}
                    className="w-[45%] flex justify-center items-center bg-[#ffffff] p-2 rounded-md shadow-inner hover:bg-[#000000]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github link" width={40} />
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
