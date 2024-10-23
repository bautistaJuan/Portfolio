import bg from "../../assets/Minimalist Computer Setup.jpeg";
export default function Presentation() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen w-full flex  items-center justify-center bg-cover  bg-no-repeat bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <hgroup className="text-[2rem] text-white  backdrop-blur-lg mt-[1rem] sm:text-[3rem] lg:text-[4rem] text-center ">
        <h1>HOLA, SOY JUAN.</h1>
        <h2>FRONTEND DEVELOPER</h2>
      </hgroup>
    </div>
  );
}
