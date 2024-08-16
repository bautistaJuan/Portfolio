import diseñoWeb from "../../assets/Prototyping process-bro.png";
import frontend from "../../assets/Static website-amico.png";

export function Products() {
  let info = [
    {
      img: diseñoWeb,
      title: "Diseño Personalizado",
      description:
        "Puedo diseñar páginas webs que estén a la altura de las expectativas. Mi compromiso esta en crear un diseño adaptativo y amigable para que los usuarios puedan encontrar desde el primer momento eso que están buscando",
      id: "services-interfaces",
    },
    {
      img: frontend,
      title: "Desarrollo web",
      description:
        "Como desarrollador web también me encargo de escribir el código para darle vida a las páginas web, previamente diseñadas. Aplicando mis conocimientos como desarrollador Frontend",
      id: "services-frontend",
    },
  ];
  return (
    <section className="flex flex-col lg:flex-row lg:gap-[4rem] 2xl:gap-[26rem] ">
      {info.map((inf, index) => {
        return (
          <div
            key={index}
            className="flex flex-col  w-[21rem] sm:w-[30rem] items-center  mb-24 min-h-[43rem] lg:w-[32rem]"
          >
            <img
              src={inf.img}
              alt={inf.title}
              className="w-[21rem] sm:w-[26rem]"
            />
            <div className="text-white text-center flex flex-col w-full ">
              <h4 className="text-[1.5rem] sm:text-[1.8rem] font-bold p-5">
                {inf.title}
              </h4>
              <span className="font-extralight sm:text-[1.4rem] ">
                {inf.description}
              </span>
            </div>
            <a href="#contact" className="mt-auto">
              <button className="bg-[#416BC6] rounded-xl mt-7 h-[4rem] w-[18rem] sm:w-[20rem] text-white font-semibold text-[1.3rem]">
                Solicitar Servicios
              </button>
            </a>
          </div>
        );
      })}
    </section>
  );
}
