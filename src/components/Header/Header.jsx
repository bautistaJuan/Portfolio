import { useState } from "react";
import styleFor from "./header.module.css";
export default function Header() {
  const [showButton, setWhichButton] = useState(false);
  const handleChangeBtn = () => {
    setWhichButton(!showButton);
  };
  const Links = () => {
    const links = [
      { direction: "#portfolio", siteId: "Portfolio" },
      { direction: "#contact", siteId: "Contacto" },
      { direction: "#services", siteId: "Servicios" },
      { direction: "#about", siteId: "About" },
    ];
    const handleLink = () => {
      setWhichButton(false);
    };
    return (
      <>
        {links.map((l, index) => {
          return (
            <a key={index} href={l.direction} onClick={handleLink}>
              {l.siteId}
            </a>
          );
        })}
      </>
    );
  };
  return (
    <>
      <header className={`headerr ${styleFor["header"]}`}>
        <div>
          <a href="#">
            <img
              src="/src/assets/prfile.png"
              className={styleFor["header-logo"]}
            />
          </a>
        </div>
        <div className={styleFor["menu-desktop"]}>
          <Links />
        </div>
        <div className={styleFor["menu-burger"]}>
          {!showButton ? (
            <button onClick={handleChangeBtn}>
              <img
                src="/src/assets/hamburguer-vector.png"
                alt="menu"
                className={styleFor["open-button-img"]}
              />
            </button>
          ) : (
            <>
              <div className={styleFor["nav-menu"]}>
                <div className={styleFor["nav-div_button"]}>
                  <button onClick={handleChangeBtn}>
                    <img
                      src="/src/assets/close-button.png"
                      alt="menu"
                      className={styleFor["close-button-img"]}
                    />
                  </button>
                </div>
                <div className={styleFor["nav-options"]}>
                  <Links />
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
