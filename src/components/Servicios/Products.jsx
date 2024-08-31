import diseñoWeb from "../../assets/Prototyping process-bro.png";
import frontend from "../../assets/Static website-amico.png";

export function Products() {
  let info = [
    {
      img: diseñoWeb,
      title: "Diseño Personalizado",
      description:
        "Siguiendo los patrones de diseño UX/UI, me aseguro de que la interfaz de usuario sea intuitiva y fácil de usar. Esto incluye la selección de colores, tipografía, imágenes y otros elementos visuales que se alineen con el mensaje del sitio web.",
      id: "services-interfaces",
    },
    {
      img: frontend,
      title: "Desarrollo web",
      description:
        "Como desarrollador web me enfoco en crear páginas web siguiendo las mejores prácticas de programación y usando las últimas tecnologías para que los usuarios puedan navegar y interactuar con el sitio web de manera rápida y eficiente.",
      id: "services-frontend",
    },
  ];
  return (
    <section className="flex flex-col items-center lg:flex-row lg:gap-[4rem] 2xl:gap-[26rem] ">
      {info.map((inf, index) => {
        return (
          <div
            key={index}
            className="flex flex-col w-11/12 lg:w-[35rem] sm:w-[30rem] sm:h-[50rem] items-center mb-24 gap-5"
          >
            <img
              src={inf.img}
              alt={inf.title}
              className="w-[13rem] sm:w-[26rem]"
            />
            <div className="text-white text-center flex flex-col w-full ">
              <h4 className="text-[1.5rem] sm:text-[1.8rem] font-bold p-5">
                {inf.title}
              </h4>
              <span className="font-extralight text-[1rem] sm:text-[1.4rem]">
                {inf.description}
              </span>
            </div>
            <a href="#contact" className="mt-auto">
              <button className="bg-[#416BC6] rounded-xl h-[3rem] sm:h-[4rem] w-[15rem] sm:w-[20rem] text-white font-semibold text-[1.2rem] sm:text-[1.5rem] ">
                Solicitar Servicios
              </button>
            </a>
          </div>
        );
      })}
    </section>
  );
}
