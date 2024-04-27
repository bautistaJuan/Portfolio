import contactCss from "./contact.module.css";
import email from "../../assets/email.png";
import github from "../../assets/github-vector.png";
import linkedin from "../../assets/linkedin.png";
import Form from "../Form/Form";

export default function Contact() {
  const redes = [
    { name: "Email", link: "vegajuancontact@gmail.com", img: email },
    { name: "GitHub", link: "https://github.com/bautistaJuan", img: github },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/juanbautista-dev/",
      img: linkedin,
    },
  ];
  return (
    <div id="contact" className={contactCss["contact-container"]}>
      <Form />
      <div className={contactCss["contact-redes"]}>
        <span className={contactCss["contact-title"]}>Dónde encontrarme</span>
        <div className={contactCss["contact-data-container"]}>
          {redes.map((data, idx) => {
            return (
              <div key={idx} className={contactCss["contact-data"]}>
                {data.name.toLowerCase() === "email" ? (
                  <div className={contactCss["contact-icon"]}>
                    <span className={contactCss["contact-name"]}>
                      {data.name}
                    </span>
                    <span className={contactCss["contact-link"]}>
                      {data.link}
                    </span>
                    <img src={data.img} alt="link-redes" />
                  </div>
                ) : (
                  <a href={data.link} className={contactCss["contact-icon"]}>
                    <span className={contactCss["contact-name"]}>
                      {data.name}
                    </span>
                    <span className={contactCss["contact-link"]}>
                      {data.link}
                    </span>
                    <img src={data.img} alt="link-redes" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
