import Where from "./Where";
export default function About() {
  return (
    <>
      <div id="about" className="p-6"></div>
      <div className="bg-[#2d2f30] w-full p-3 flex flex-col items-center text-center  gap-9 ">
        <div className="min-w-[22rem] md:w-[30rem]">
          <h3 className="text-[#0fa0c7] font-extrabold text-[4rem] sm:text-[4.2rem] ">
            Que hago
          </h3>
          <h4 className="text-white text-lg font-semibold sm:text-[1.3rem]">
            Diseño + Desarrollo
          </h4>
          <p className="text-white p-9 font-extralight sm:text-[1.3rem]">
            Como diseñador y desarrollador web te ofrezco soluciones
            personalizadas y efectivas para tu negocio o proyecto. Desde el
            diseño visual hasta el desarrollo funcional, me aseguro de que tu
            sitio web sea una herramienta poderosa para alcanzar tus objetivos.
          </p>
        </div>
      </div>
      <Where />
    </>
  );
}
