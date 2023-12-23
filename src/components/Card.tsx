import React from "react";
import "../sass/components/cart.scss";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { PiBellSimpleRinging } from "react-icons/pi";
import { BsCartCheck } from "react-icons/bs";
import ScrollAnimation from "../layout/ScrollAnimation";

const Card: React.FC = () => {
  return (
    <div className="card-major">
      <h1 className="mt-10 text-4xl text-center">
        {" "}
        <span className="text-[#2EAC7F]">3 простых шага</span> к получению
        желаемого товара
      </h1>
      <div className="card-container">
        <div className="grid">
          <ScrollAnimation>
            <div className="card">
              <span className="icon">
                <AiOutlineCheckSquare />
              </span>
              <h4>Заполните короткую анкету</h4>
              <p>Займет не более 2-х минут</p>
              <button
                type="button"
                className="mt-3 text-white bg-gradient-to-r w-[10rem] from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Заполнить анкету
              </button>
              <div className="shine"></div>
              <div className="background">
                <div className="tiles">
                  <div className="tile tile-1"></div>
                  <div className="tile tile-2"></div>
                  <div className="tile tile-3"></div>
                  <div className="tile tile-4"></div>

                  <div className="tile tile-5"></div>
                  <div className="tile tile-6"></div>
                  <div className="tile tile-7"></div>
                  <div className="tile tile-8"></div>

                  <div className="tile tile-9"></div>
                  <div className="tile tile-10"></div>
                </div>

                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="card">
              <span className="icon">
                <PiBellSimpleRinging />
              </span>
              <h4>Узнайте решение за 15 минут не выходя из дома</h4>
              <p>Наш специалист сразу свяжется с вами и расскажет решение</p>
              <div className="shine"></div>
              <div className="background">
                <div className="tiles">
                  <div className="tile tile-1"></div>
                  <div className="tile tile-2"></div>
                  <div className="tile tile-3"></div>
                  <div className="tile tile-4"></div>

                  <div className="tile tile-5"></div>
                  <div className="tile tile-6"></div>
                  <div className="tile tile-7"></div>
                  <div className="tile tile-8"></div>

                  <div className="tile tile-9"></div>
                  <div className="tile tile-10"></div>
                </div>

                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="card">
              <span className="icon">
                <BsCartCheck />
              </span>
              <h4>Получите желаемый товар в рассрочку</h4>
              <p>В магазине лично или закажите доставку на дом</p>
              <div className="shine"></div>
              <div className="background">
                <div className="tiles">
                  <div className="tile tile-1"></div>
                  <div className="tile tile-2"></div>
                  <div className="tile tile-3"></div>
                  <div className="tile tile-4"></div>

                  <div className="tile tile-5"></div>
                  <div className="tile tile-6"></div>
                  <div className="tile tile-7"></div>
                  <div className="tile tile-8"></div>

                  <div className="tile tile-9"></div>
                  <div className="tile tile-10"></div>
                </div>

                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Card;
