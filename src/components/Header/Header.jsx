import { useState } from "react";
import styleFor from "./header.module.css";
export default function Header() {
  const [showButton, setWhichButton] = useState(false);
  const handleChangeBtn = () => {
    setWhichButton(!showButton);
  };
  return (
    <>
      <header className={styleFor["header"]}>
        <div>
          <a href="#">
            <img
              src="/src/assets/prfile.png"
              className={styleFor["header-logo"]}
            />
          </a>
        </div>
        <div className={styleFor["menu-desktop"]}>
          <a href="#about">About</a>
          <a href="#services">Servicios</a>
          <a href="#porfolio">Porfolio</a>
          <a href="#contact">Contacto</a>
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
                  <a href="#about">About</a>
                  <a href="#services">Servicios</a>
                  <a href="#porfolio">Porfolio</a>
                  <a href="#contact">Contacto</a>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
