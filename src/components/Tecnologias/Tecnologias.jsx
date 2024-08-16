import tecnoCss from "./tectnologias.module.css";
export default function Tecnologias() {
  const Icons = () => {
    const tecnologias = [
      {
        title: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        id: 1,
      },
      {
        title: "TypeScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        id: 2,
      },
      {
        title: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        id: 3,
      },
      {
        title: "NodeJS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        id: 12,
      },
      {
        title: "Express",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        id: 4,
      },
      {
        title: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        id: 5,
      },
      {
        title: "CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        id: 6,
      },
      {
        title: "GitHub",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        id: 7,
      },
      {
        title: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        id: 8,
      },
      {
        title: "Vercel",
        img: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
        id: 9,
      },
      {
        title: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        id: 10,
      },
      {
        title: "Tailwind",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        id: 13,
      },
      {
        title: "Figma",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        id: 11,
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
                        key={info.title}
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
      <h4 className="text-center font-bold text-[2.5rem] sm:text-[2.8rem] text-[#0FA0C7] pb-9">
        Skills
      </h4>
      <div>
        <Icons />
      </div>
    </div>
  );
}
