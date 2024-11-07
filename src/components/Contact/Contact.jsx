import Form from "../Form/Form";

import juanchi from "../../assets/Coding-bro.png";
import { SOCIAL_MEDIA } from "../../constants";

export default function Contact() {

  return (
    <div
      id="contact"
      className="flex flex-col bg-[#161C1F] text-white h-[82rem]  gap-20 md:justify-around md:gap-10"
    >
      <h3 className="text-[#0fa0c7] text-[3rem] font-bold text-center mt-20">
        Escribime
      </h3>
      <Form />
      <div className="flex flex-col text-center">
        <div className="flex justify-center gap-10 p-5">
          {SOCIAL_MEDIA.map((data, index) => {
            return (
              <div key={index} className="flex flex-col-reverse items-center">
                <a href={data.link} className="w-12">
                  <img src={data.img} alt="link-redes" className="w-15" />
                </a>
              </div>
            );
          })}
        </div>
        <div className=" flex flex-col items-center p-12 gap-2 w-full">
          <span className="text-[1.3rem]">
            Página diseñada y desarrollada por:
          </span>
          <img
            src={juanchi}
            alt="juachi"
            className="w-[14rem] lg:w-[22rem] h-[13rem] lg:h-[21rem]"
          />
          <span className="text-[1.3rem]">@Juanchidev</span>
        </div>
      </div>
    </div>
  );
}
