import deDondeSoy from "../../assets/Ellipse 7.jpg";
export default function About() {
  return (
    <>
      <div id="about">
        <section className="flex flex-col w-full items-center  bg-[#000000] p-5 lg:flex-row lg:justify-evenly lg:items-center">
          <div className="text-center lg:text-left p-6 max-w-[35rem]">
            <h2 className="font-extrabold text-[3rem] text-[#0FA0C7] py-9 px-3">
              About me
            </h2>
            <span className=" sm:text-[1.3rem]  lg:text-[1.5rem]  text-white">
              <b>
                Mi nombre es Juan Bautista Vega, soy
                <b className="text-[#439cd0]"> Frontend Developer</b>.
              </b>{" "}
              Soy desarrollador autodidacta, vivo en Argentina y tengo 22 años.
              desde muy chiquito me gustó el mundo de la programación, empecé
              escribiendo comandos básicos en mi terminal, descubrir que podia
              utilizar mi computadora solamente escribiendo unas cuantas lineas
              de codigo fue una locura para mi, desde ahí empecé investigar
              hasta que en el 2020 encontré La Geekipedia De Ernesto,
              practicando y familiarizándome con el diagrama de flujo utilizando
              Raptor para posteriormente aplicarlo en JavaScript, el primer y
              único lenguaje, por el momento, de programación que actualmente
              manejo y sigo aprendiendo día a día. Desde entonces sigo
              capacitándome para poder algún día dar mis primeros pasos en el
              mundo laboral.
            </span>
          </div>
          <img
            src={deDondeSoy}
            className="yo w-[15rem] sm:w-[22rem] h-[20rem] sm:h-[27rem] lg:h-[34rem] lg:w-[27rem] custom-shadow"
            alt="Juan"
          />
        </section>
      </div>
    </>
  );
}
