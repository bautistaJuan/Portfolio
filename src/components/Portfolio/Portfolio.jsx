import portfolioCss from "./portfolio.module.css";
import myVideo from "../../assets/Search Products.mp4";
import poster from "../../assets/frontend.png";
import world from "../../assets/world.png";
import github from "../../assets/github-vector.png";

export default function Portfolio() {
  const proyectos = [
    {
      name: "Buscador de Mercado Libre",
      video: myVideo,
      id: 1,
      world: "#",
      github: "#",
      desc: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Google libros",
      video: myVideo,
      id: 2,
      world: "#",
      github: "#",
      desc: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Google libros",
      video: myVideo,
      id: 2,
      world: "#",
      github: "#",
      desc: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Google libros",
      video: myVideo,
      id: 2,
      world: "#",
      github: "#",
      desc: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  return (
    <div id="portfolio" className={portfolioCss["portfolio-container"]}>
      <h1>Portfolio</h1>
      <div className={portfolioCss["portfolio-proyectos-container"]}>
        {proyectos.map(p => {
          return (
            <div
              key={p.id}
              className={portfolioCss["portfolio-video-container"]}
            >
              <video
                key={p.idd}
                className={portfolioCss["portfolio-video"]}
                controls
                muted
                poster={poster}
              >
                <source src={p.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={portfolioCss["portfolio-desc"]}>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
              <div className={portfolioCss["portfolio-links"]}>
                <a href={p.world}>
                  <img src={world} width={50} />
                </a>
                <a href={p.github}>
                  <img src={github} width={50} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
