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
      <div className="w-full flex flex-col  items-center p-5 text-center lg:flex-row justify-center gap-7 lg:gap-16 ">
        <img
          src={deDondeSoy}
          className="md:w-[28rem] md:h-[32rem] lg:w-[33rem] lg:h-[36rem]"
          alt="Juan"
          width={360}
        />
        <span className="max-w-[28rem] md:text-[1.3rem]  lg:text-[1.5rem] lg:h-[36rem]">
          Soy una persona que no teme tomar riesgos cuando es necesario. Siempre
          estoy en busca de experiencias que me hagan crecer tanto espiritual
          como profesionalmente. Trabajé durante 3 años como operario, manejando
          máquinas envasadoras de productos. Mientras tanto, me estuve
          capacitando profesionalmente para lo que hoy en día es mi vocación
        </span>
      </div>
    </section>
  );
}
