import Where from "./Where";
import decoration from "../../assets/strelitzia plant-rafiki.png";
export default function About() {
  return (
    <>
      <div id="about" className="p-6"></div>
      <div className="bg-[#2d2f30] w-full p-3 flex flex-col items-center text-center  gap-9 ">
        <div className="min-w-[22rem] md:w-[30rem] flex flex-col items-center">
          <h3 className="text-[#0fa0c7] font-extrabold text-[4rem] sm:text-[4.2rem] ">
            Que hago
          </h3>
          <img
            src={decoration}
            alt="decoration"
            className="hidden lg:block md:absolute md:top-[51rem] md:left-0 w-[20rem]"
          />
          <p className="text-white p-9 font-extralight sm:text-[1.3rem]">
            Me encanta crear páginas web innovadoras y atractivas. Mi objetivo
            es crear experiencias web excepcionales que sean fáciles de usar y
            visualmente atractivas. Me aseguro de que cada proyecto que realizo
            sea de alta calidad y cumpla con los estándares de la industria.
          </p>
        </div>
      </div>
      <Where />
    </>
  );
}
