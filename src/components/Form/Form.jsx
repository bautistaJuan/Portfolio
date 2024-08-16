import { useRef, useState } from "react";
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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col items-center p-5 gap-10 md:p-10  h-[35rem] justify-center"
    >
      <div className=" flex flex-col items-center gap-10 w-full md:flex-row md:w-[45rem] 2xl:w-[50rem] ">
        <label className="flex flex-col gap-1 w-full">
          Nombre
          <input
            type="text"
            name="user_name"
            autoComplete="off"
            className="h-14 p-2 bg-[#2c2c2c79] rounded text-white w-full focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 w-full">
          Email
          <input
            type="email"
            name="user_email"
            autoComplete="off"
            className="h-14 p-2 bg-[#2c2c2c79] rounded text-white w-full focus:outline-none"
          />
        </label>
      </div>
      <div className=" flex flex-col  gap-12 w-full md:w-[45rem] 2xl:w-[50rem]">
        <label className="flex flex-col gap-1 mt-7.5 w-full md:h-[10rem]">
          Mensaje
          <textarea
            name="message"
            className="h-24 md:min-h-full p-2 bg-[#2c2c2c79] rounded text-white w-full focus:outline-none"
          />
        </label>
        {textError ? (
          <span className="text-red-600 italic text-sm ">
            Debes ingresar todos los datos correctamente
          </span>
        ) : (
          ""
        )}
        <label className="w-full h-[3.5rem]">
          <input
            type="submit"
            value={textBtn}
            className="bg-[#0fa0c73d] h-full text-lg py-2.5 px-5 rounded text-white font-bold mt-7.5 w-full cursor-pointer"
          />
        </label>
      </div>
    </form>
  );
}
