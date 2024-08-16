import whatsapp from "../../assets/whatsApp.png";
import instagram from "../../assets/2587941_instagram_media_social_icon.png";
import github from "../../assets/github-vector.png";
import linkedin from "../../assets/linkedin.png";
import Form from "../Form/Form";
import juanchi from "../../assets/Coding-bro.png";

export default function Contact() {
  const socialMedias = [
    { name: "GitHub", link: "https://github.com/bautistaJuan", img: github },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/juanbautista-dev/",
      img: linkedin,
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/+5491165557489?text=!Hola Juan!",
      img: whatsapp,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/juanchidev",
      img: instagram,
    },
  ];
  return (
    <div
      id="contact"
      className="flex flex-col bg-[#161C1F] text-white h-[82rem]  gap-20 md:justify-around md:gap-10"
    >
      <h3 className="text-[#0fa0c7] text-3xl md:text-[3rem] font-bold text-center mt-20">
        Escribime
      </h3>
      <Form />
      <div className="flex flex-col text-center">
        <div className="flex justify-center gap-10 p-5">
          {socialMedias.map((data, index) => {
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
