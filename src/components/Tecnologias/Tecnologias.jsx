import tecnoCss from "./tectnologias.module.css";
export default function Tecnologias() {
  const Icons = () => {
    const tecnologias = [
      {
        title: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        title: "TypeScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        title: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        title: "NodeJS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        title: "Express",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        title: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        title: "CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        title: "GitHub",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        title: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        title: "Vercel",
        img: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        title: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        title: "Tailwind",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ];
    return (
      <>
        <table className={tecnoCss["icons-table"]}>
          <tbody className={tecnoCss["icons-tbody"]}>
            <tr className={tecnoCss["icons-tr"]}>
              {tecnologias.map(info => {
                return (
                  <>
                    <td key={info.title}>
                      <span>
                        <strong>{info.title}</strong>
                      </span>
                      <img
                        src={info.img}
                        alt={info.title}
                        className={tecnoCss["icons-img"]}
                      />
                    </td>
                  </>
                );
              })}
            </tr>
          </tbody>
        </table>
      </>
    );
  };
  return (
    <div className={tecnoCss["tecno-container"]}>
      <h4>Tecnologias</h4>
      <div>
        <Icons />
      </div>
    </div>
  );
}
