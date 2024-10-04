import SphereAnimation from "../bg-anime/Anime";
export default function Presentation() {
  return (
    <>
      <main className="min-h-[100vh] flex flex-col justify-center items-center lg:flex-row">
        <SphereAnimation />
        <div className="flex flex-col justify-center items-center">
          <hgroup className="text-[2rem] mt-[1rem] sm:text-[3rem] lg:text-[4rem] text-center ">
            <h1>HOLA, SOY JUAN.</h1>
            <h2>FRONTEND DEVELOPER</h2>
          </hgroup>
        </div>
      </main>
    </>
  );
}
