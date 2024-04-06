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
        <h4>Donde encontrarme</h4>
        {redes.map((info, idx) => {
          return (
            <div key={idx} className={contactCss["contact-div"]}>
              <span className={contactCss["contact-name"]}>{info.name}</span>
              {info.name.toLowerCase() === "email" ? (
                <div className={contactCss["contact-link"]}>
                  <span>{info.link}</span>
                  <img src={info.img} alt="link-redes" />
                </div>
              ) : (
                <a href={info.link} className={contactCss["contact-link"]}>
                  <span>{info.link}</span>
                  <img src={info.img} alt="link-redes" />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
