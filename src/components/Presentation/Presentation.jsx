import { useState, useEffect } from "react";
import ftPresentation from "../../assets/Diseño-2.png";
export default function Presentation() {
  const [text, setText] = useState("FRONT-END DEV");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(prevText =>
        prevText === "FRONT-END DEV" ? "Web Design" : "FRONT-END DEV"
      );
    }, 3590);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-around lg:justify-evenly  mt-[6rem]   overflow-hidden p-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[3rem] lg:text-[4rem] p-3">
            Hola, soy
            <br />
            <span className="font-extrabold">Juan Vega</span>
          </h1>
          <div className="flex items-center justify-center bg-[#416BC6] w-80 h-20 text-center p-4 rounded">
            <span className="text-[2rem] lg:text-[2.3rem] font-semibold text-white animate-bounce">
              {text}
            </span>
          </div>
        </div>
        <img
          className="w-[20rem] h-[25rem] lg:h-[31rem] lg:w-[28rem]"
          src={ftPresentation}
        />
      </main>
    </>
  );
}
