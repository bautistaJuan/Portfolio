import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import chapa from "../../assets/chapa-pintura.jpg";
import posterML from "../../assets/mercado-libre-logo.png";
import world from "../../assets/world.png";
import github from "../../assets/github-vector.png";
import chat from "../../assets/chat-app.png";

export default function Portfolio() {
  const proyectos = [
    {
      title: "App sencilla para chatear",
      subtitle: "TypeScript | HTML5 | Firebase | Firestore | API | Vercel CLI",
      poster: chat,
      id: 0,
      world: "https://app-chat-topaz.vercel.app",
      github: "https://github.com/bautistaJuan/weather-app",
      desc: `En esta webapp muy simple, permite registrar a usuarios solo con su nombre y
       su mail para poder luego verificarlos ante la base de datos que esta montada con Firestore y Firebase RealTime. 
       Puedes ingresar usando un room id que se le otorga a cada sala, pudiendo enviar mensajes, recibirlos en tiempo real y autenticar a los usuarios con un mail. `,
    },
    {
      title: "Buscador de Mercado Libre",
      subtitle:
        "TypeScript | React | CSS Modules| HTML5 | React Hooks | GitHub | APIs | Responsive",
      poster: posterML,
      id: 1,
      world: "https://search-products-sand.vercel.app/",
      github: "https://github.com/bautistaJuan/React-search-products",
      desc: `Buscador de articulos utilizando la Api publica y el diseño de UI de MercadoLibre. La misma fue creada en React,
       Se aplicaron los conocimientos en custom hooks, funcional components y responsive design..`,
    },
    {
      title: "Chapa y Pintura",
      subtitle:
        "JavaScript| SPA | HTML5 | CSS | Custom-Elements | Figma | Social Media | Mobile",
      poster: chapa,
      id: 4,
      world: "https://chapa-pitura.vercel.app/",
      github: "https://github.com/bautistaJuan/chapa-pitura",
      desc: `Una SPA para un taller de chapa y pintura, con el objetivo de poder gestionar los clientes y los trabajos que se realizan.
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
        id="portfolio"
      >
        <h1 className="text-[#0FA0C7]  font-extrabold text-[2.5rem] text-center mb-14 pt-[6rem]">
          Portfolio
        </h1>
        <div
          ref={ref}
          className="w-10/12 px-5 pb-32 justify-center place-items-center grid 2xl:grid-cols-3 lg:grid-cols-2  gap-12 min-h-screen  "
        >
          {proyectos.map(p => {
            return (
              <motion.div
                key={p.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, delay: p.id * 0.2 }}
                className="flex flex-col items-center  w-[21rem] sm:w-[26rem] h-[40rem] sm:h-[42rem]"
              >
                <img
                  className="w-full h-[15.9rem] sm:h-[20rem] transition-transform duration-300 hover:scale-150 hover:cursor-zoom-in"
                  src={p.poster}
                />
                <div className="flex flex-col flex-grow">
                  <h2 className="mb-5 text-[1.2rem] font-semibold">
                    {p.title}
                  </h2>
                  <h4 className="font-cursive text-[#ffff]">{p.desc}</h4>
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
