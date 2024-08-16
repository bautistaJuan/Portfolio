import { Products } from "./Products";
export default function Services() {
  return (
    <div
      id="services"
      className="bg-[#2d2f30f0] p-2 flex flex-col items-center"
    >
      <h3 className="text-[#0FA0C7]  font-extrabold text-[2.5rem] md:text-[3rem] text-center mb-14 pt-[6rem] 2xl:text-[5rem]">
        Mis servicios
      </h3>
      <Products />
    </div>
  );
}
