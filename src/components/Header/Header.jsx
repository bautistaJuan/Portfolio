import { useState, useEffect } from "react";
import headerLogo from "../../assets/Coding-bro.png";
import burguerOpen from "../../assets/hamburguer-vector.png";
import burguerClose from "../../assets/close-button.png";
import styleFor from "./header.module.css";
export default function Header() {
  const [showButton, setWhichButton] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChangeBtn = () => {
    setWhichButton(!showButton);
  };
  const Links = () => {
    const links = [
      { direction: "#about", siteId: "About" },
      // { direction: "#services", siteId: "Servicios" },
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
      <header
        className={`${styleFor["header"]} ${
          isScrolled ? styleFor.scrolled : ""
        }`}
      >
        <div>
          <a href="#">
            <img
              src={headerLogo}
              alt="Web illustrations by Storyset"
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
                src={burguerOpen}
                alt="menu"
                className={styleFor["open-button-img"]}
              />
            </button>
          ) : (
            <>
              <div
                className={`${styleFor["nav-menu"]} ${
                  showButton ? styleFor["nav-menu-active"] : ""
                }`}
              >
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
