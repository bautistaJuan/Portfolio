// import ftPresentation from "../../assets/altumcode-zE007SNgcdE-unsplash.jpg";
export default function Presentation() {
  return (
    <>
      <main
        className={`flex flex-col md:flex-row items-center justify-center lg:justify-evenly min-h-[100vh] p-4 text-center mainbg`}
      >
        <div className="flex flex-col lg:flex-row sm:p-x-[2rem] items-center justify-around lg:gap-[4rem] 2xl:gap-[10rem]">
          <div className="hoverEffect font-extrabold text-[3rem] lg:text-left lg:text-[4rem] 2xl:text-[5rem] text-white">
            <h1>
              Hola, Soy <br className="lg:hidden" />
              Juan.
            </h1>
            <div>
              <span>Desarrollador Web Fullstack</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
