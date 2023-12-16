import React from "react";
import "../sass/components/main.scss";
import { PiSealCheck } from "react-icons/pi";

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-left-content">
          <h1>
            Рассрочка без банка на <br /> товары по нормам Ислама <br />{" "}
            <span className="text-[#2EAC7F]"> с одобрением за 15 минут</span>
          </h1>
          <ul className="main-feature wow fadeInUp">
            <li>
              <PiSealCheck size={30} />
              Вам не нужно вносить <br /> первоначальный взнос
            </li>
            <li>
              <PiSealCheck size={30} />
              Остутствие скрытых <br /> платежей и страховок
            </li>
            <li>
              <PiSealCheck size={30} />
              Без дополнительных <br /> сборов и штрафов
            </li>
          </ul>
          <div className="main-call">
            <span className="main-call-text">
              Оставьте заявку и получите сразу pdf-файл <br /> со списком всех наших
              партнеров
            </span>
            <div className="btn-wrap">
              <button
                type="button"
                className="text-white bg-gradient-to-r w-[22rem] h-[3rem] from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Получить список партнеров
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
