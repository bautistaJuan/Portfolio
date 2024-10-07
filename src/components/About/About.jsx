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
                <b className="text-[#439cd0]"> Frontend Developer</b>. Me dedico
                a la creación de sitios webs atractivos y funcionales. Mi pasión
                por la programación y la tecnología me ha traido hasta aquí,
                impulsado por el esfuerzo y la dedicación.
              </b>
              <b className="text-[#838d93]">
                {" "}
                Mi motivación principal es ayudar a las personas a resolver sus
                problemas a través de la tecnología, lo que me lleva a
                perfeccionarme continuamente como desarrollador., Cada proyecto
                es una oportunidad para aplicar mis conocimientos, generar
                valor, y establecer conexiones significativas con los clientes y
                colegas con los que tengo el privilegio de trabajar.
              </b>
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
