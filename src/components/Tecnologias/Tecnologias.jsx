import tecnoCss from "./tectnologias.module.css";
import { TECH_STACK } from "../../constants";

export default function Tecnologias() {

  return (
    <div className={tecnoCss["tecno-container"]}>
      <h4 className="text-center font-bold text-[2.5rem] sm:text-[2.8rem] text-[#0FA0C7] pb-9">
        Skills
      </h4>
      <table className={tecnoCss["icons-table"]}>
        <tbody className={tecnoCss["icons-tbody"]}>
          <tr className={tecnoCss["icons-tr"]}>
            {TECH_STACK.map(info => {
              return (
                <td key={info.id}>
                  <span>
                    <strong>{info.title}</strong>
                  </span>
                  <img
                    src={info.img}
                    alt={info.title}
                    className={tecnoCss["icons-img"]}
                  />
                </td>                
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
