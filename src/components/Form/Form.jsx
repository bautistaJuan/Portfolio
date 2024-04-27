import { useRef, useState } from "react";
import formCss from "./form.module.css";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [textBtn, setTextBtn] = useState("Enviar");
  const [textError, setTextError] = useState(false);

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    const name = form.current["user_name"].value;
    const email = form.current["user_email"].value;
    const message = form.current["message"].value;

    if (!email || !name || !message) {
      console.log("El formulario esta vacío");
      setTextError(true);
      setTextBtn("Enviar");
      return;
    }
    emailjs
      .sendForm("service_97dpelq", "template_b9lhgbu", form.current, {
        publicKey: "MbiStysafaqvMW3iC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setTextBtn("Gracias !");
        },
        error => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className={formCss["form-container"]}>
      <h3 className={formCss["form-title"]}>Escribime</h3>
      <label>
        Nombre
        <input type="text" name="user_name" autoComplete="off" />
      </label>
      <label>
        Email
        <input type="email" name="user_email" autoComplete="off" />
      </label>
      <label className={formCss["form-text"]}>
        Mensaje
        <textarea name="message" />
      </label>
      {textError ? (
        <span className={formCss["form-error"]}>
          Debes ingresar todos los datos correctamente
        </span>
      ) : (
        ""
      )}
      <label>
        <input
          className={formCss["form-button"]}
          type="submit"
          value={textBtn}
        />
      </label>
    </form>
  );
}
