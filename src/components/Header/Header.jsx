import { useState } from "react";
import headerLogo from "../../assets/prfile.png";
import burguerOpen from "../../assets/hamburguer-vector.png";
import burguerClose from "../../assets/close-button.png";
import styleFor from "./header.module.css";
export default function Header() {
  const [showButton, setWhichButton] = useState(false);
  const handleChangeBtn = () => {
    setWhichButton(!showButton);
  };
  const Links = () => {
    const links = [
      { direction: "#about", siteId: "About" },
      { direction: "#services", siteId: "Servicios" },
      { direction: "#portfolio", siteId: "Portfolio" },
      { direction: "#contact", siteId: "Contacto" },
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
            <img src={headerLogo} className={styleFor["header-logo"]} />
          </a>
        </div>
        <div className={styleFor["menu-desktop"]}>
          <Links />
        </div>
        <div className={styleFor["menu-burger"]}>
          {!showButton ? (
            <button onClick={handleChangeBtn}>
              <img
                src={burguerOpen}
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
                      src={burguerClose}
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
