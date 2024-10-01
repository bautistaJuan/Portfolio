import SphereAnimation from "../bg-anime/Anime";
export default function Presentation() {
  return (
    <>
      <main className="min-h-[100vh] flex flex-col justify-center items-center lg:flex-row lg:justify-evenly">
        <SphereAnimation />
        <div className="flex flex-col justify-center items-center">
          <hgroup className="text-[2rem] mt-[1rem] sm:text-[3rem] text-center lg:text-end border ">
            <h1>HOLA, SOY JUAN.</h1>
            <h2>FRONTEND DEVELOPER</h2>
          </hgroup>
        </div>
      </main>
    </>
  );
}
