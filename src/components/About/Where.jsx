import deDondeSoy from "../../assets/de-donde-soy.jpg";

export default function Where() {
  return (
    <section className="flex flex-col w-full items-center mb-24 ">
      <div className="text-center ">
        <h2 className="font-extrabold text-[3rem] text-[#0FA0C7] py-9 px-3">
          Raíces y Alas
        </h2>
        <div className="w-[22rem] bg-[#416BC6] p-2 rounded-xl sm:w-[28rem] lg:w-[50rem]  lg:p-5 mb-5">
          <span className="text-white text-[1.2rem] md:text-[1.6rem] lg:text-[2rem]">
            Diseñador y desarrollador en Buenos Aires, AR
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col  items-center p-5 text-center lg:text-left lg:flex-row justify-center gap-7 lg:gap-16 ">
        <img
          src={deDondeSoy}
          className="md:w-[28rem] sm:h-[32rem] sm:w-[30rem] lg:w-[33rem] lg:h-[36rem]"
          alt="Juan"
          width={360}
        />
        <span className="max-w-[28rem] sm:text-[1.3rem]  lg:text-[1.5rem] lg:h-[36rem]">
          Desde pequeño, siempre me ha interesado la programación y la
          tecnología, y he dedicado mucho tiempo a aprender y mejorar mis
          habilidades en este campo. Además, soy una persona que es muy creativa
          y me gusta explorar nuevas ideas. Mi objetivo es ser un desarrollador
          de software de alto nivel y convertirme en un experto en este campo.
        </span>
      </div>
    </section>
  );
}
