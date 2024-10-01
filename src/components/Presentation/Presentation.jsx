import SphereAnimation from "../bg-anime/Anime";
export default function Presentation() {
  return (
    <>
      <main className="min-h-[100vh] flex flex-col justify-center items-center  ">
        <SphereAnimation />
        <div className="flex flex-col justify-center items-center">
          <hgroup className="text-[2rem] sm:text-[3rem] md:text-[3rem] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full">
            <h1>HOLA, SOY JUAN.</h1>
            <h2>FRONTEND DEVELOPER</h2>
          </hgroup>
        </div>
      </main>
    </>
  );
}
