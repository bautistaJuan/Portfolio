import deDondeSoy from "../../assets/Ellipse 7.jpg";
export default function About() {
  return (
    <>
      <div id="about">
        <section className="flex flex-col w-full items-center  bg-[#000000] p-5 lg:flex-row lg:justify-around lg:items-center">
          <div className="text-center lg:text-left p-6 max-w-[35rem]">
            <h2 className="font-extrabold text-[3rem] text-[#0FA0C7] py-9 px-3">
              About me
            </h2>
            <span className=" sm:text-[1.3rem]  lg:text-[1.5rem]  text-white">
              Mi nombre es Juan Bautista Vega, tengo 22 años y soy desarrollador
              web Front-End. Llevo mas 2 años en el mundo de la programación.
              Actualmente me encuentro estudiando día tras día para mejorar mis
              habilidades y así poder un día dar mis primeros pasos dentro del
              mercado laboral. Al día de la fecha me encuentro en la búsqueda de
              nuevos desafíos para poder compartir mis conocimientos y trabajar
              en equipo.
            </span>
          </div>
          <img
            src={deDondeSoy}
            className="yo w-[15rem] sm:w-[22rem] h-[20rem] sm:h-[27rem] "
            alt="Juan"
          />
        </section>
      </div>
    </>
  );
}
