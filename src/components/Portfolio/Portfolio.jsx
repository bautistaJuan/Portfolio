import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import posterML from "../../assets/mercado-libre-logo.png";
import world from "../../assets/world.png";
import chat from "../../assets/chat-app.png";
import ppt from "../../assets/ppt.jpg";
import HDV from "../../assets/HDV2.jpg";

export default function Portfolio() {
  const proyectos = [
    {
      title: "Calcula tus horas de vida",
      subtitle: "TypeScript | HTML5 | Firebase | Firestore | API | Vercel CLI",
      poster: HDV,
      id: 0,
      world: "https://horas-de-vida.netlify.app/",
      github: "https://horas-de-vida.netlify.app/",
      desc: `Esta web te muestra la cantidad de horas que llevas vivo. Solamente ingresando tu fecha de nacimiento.
      Como adicional, podes ver las horas que faltan para alguna fecha en especial.
      Desarrollada con JavaScript, HTML5 y CSS3. Tiene efectos básicos, como el Loader y la aparición de los resultados.
        
      `,
    },
    {
      title: "Chat Online",
      subtitle: "TypeScript | HTML5 | Firebase | Firestore | API | Vercel CLI",
      poster: chat,
      id: 0,
      world: "https://app-chat-topaz.vercel.app",
      github: "https://github.com/bautistaJuan/app-chat",
      desc: `En esta webapp simple, permite registrar a usuarios solo con su nombre y
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
      title: "Piedra Papel o Tijera",
      subtitle:
        "JavaScript | SPA | HTML5 | CSS | Custom-Elements | Responsive | GitHub | State Management",
      poster: ppt,
      id: 4,
      world: "https://ppt-dwf.vercel.app/",
      github: "https://github.com/bautistaJuan/ppt-dwf",
      desc: `El clásico juego de piedra papel o tijera, fue creado con JavaScript, HTML5, CSS, Custom Elements. Es una SPA que permite jugar contra la computadora. 
      Consta de 3 secciones, la primera es la pantalla de inicio, la segunda es la pantalla de juego y la tercera es la pantalla de resultados.`,
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
                <div className="flex self-end w-full justify-center ">
                  <a
                    href={p.world}
                    className="w-full min-h-full  flex justify-center bg-[#2766b3] p-2 rounded-md shadow-inner hover:bg-[#d3a33b] "
                  >
                    <img src={world} width={50} />
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
