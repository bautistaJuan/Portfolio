import diseñoWeb from "../../assets/Prototyping process-bro.png";
import frontend from "../../assets/Static website-amico.png";
import backend from "../../assets/Server-amico.png";

export function Products() {
  let info = [
    {
      img: diseñoWeb,
      title: "Diseño de interfaces Web",
      description: `
        Siguiendo los patrones de diseño UX/UI, me aseguro de que la interfaz de usuario sea intuitiva y fácil de usar. 
        Esto incluye la selección de colores, tipografía, imágenes y otros elementos visuales que se alineen con el mensaje del sitio web.
      `,
      id: "services-interfaces",
    },
    {
      img: frontend,
      title: "Desarrollo Frontend",
      description: `
        Mi trabajo es implementar el diseño visual y crear interacciones utilizando HTML, CSS y JavaScript.
         Esto incluye la creación de páginas web, formularios, menús desplegables y otros elementos interactivos.
         conectar el frontend con el backend y asegurarme de que la información se procese y se muestre correctamente en la interfaz de usuario.
         `,
      id: "services-frontend",
    },
    {
      img: backend,
      title: "Arquitectura Backend",
      description: `
        Como desarrollador backend me encargo de crear mis propias APIs para facilitar la comunicación entre el frontend y el servidor, utilizando el diseño MVC (Modelo-Vista-Controlador) para organizar el código y facilitar la escalabilidad del sistema.
        Utilizando herramientas como Postman para diseñar y probar los endpoints, y Node.js junto a Express.js para crear y gestionar la lógica del servidor.
        También utilizo bases de datos tanto SQL como NoSQL.
      `,
      id: "services-backend",
    },
  ];
  return (
    <section className="flex flex-col items-center ">
      {info.map((inf, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col lg:flex-row  w-11/12 mt-8 lg:w-[100%] sm:w-[30rem] items-center gap-5 ${
              inf.id == "services-frontend" ? "lg:flex-row-reverse" : ""
            } `}
          >
            <img
              src={inf.img}
              alt={inf.title}
              className="w-[13rem] sm:w-[26rem]"
            />
            <div className="text-white text-center flex flex-col w-full ">
              <h4 className="text-[1.5rem] sm:text-[1.8rem] font-bold p-5">
                {inf.title}
              </h4>
              <span className="font-extralight text-[1rem] sm:text-[1.4rem]">
                {inf.description}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
