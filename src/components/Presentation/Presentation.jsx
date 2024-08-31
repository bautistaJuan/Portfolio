import { useState, useEffect } from "react";
import ftPresentation from "../../assets/sapiens.png";
export default function Presentation() {
  const [text, setText] = useState("FRONT-END DEV");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(prevText =>
        prevText === "DESARROLLADOR WEB" ? "DISEÑADOR WEB" : "DESARROLLADOR WEB"
      );
    }, 3590);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-around lg:justify-evenly  mt-[6rem]   overflow-hidden p-4 text-center">
        <div className="flex flex-col lg:flex-row sm:p-x-[2rem] items-center justify-around lg:gap-[4rem] 2xl:gap-[10rem] ">
          <img
            className="w-[60rem]  h-[20rem] sm:h-[25rem] sm:w-[30redm]  lg:h-[30rem] lg:w-[34rem] 2xl:w-[48rem] 2xl:h-[46rem]"
            src={ftPresentation}
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[2rem] lg:text-[4rem] 2xl:text-[5rem] ">
              Hola, soy
              <br />
              <span className="font-extrabold">Juan Vega</span>
            </h1>
            <div className="flex items-center justify-center bg-black w-[18rem] 2xl:w-[25rem] lg:w-[22rem] h-16 lg:h-20 text-center p-4 rounded">
              <span className="text-shadow text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem] font-bold text-[#0fa0c7] animate-bounce">
                {text}
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
