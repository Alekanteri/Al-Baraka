import React, { useState } from "react";
import "../sass/components/calculator.scss";

const Calculator = () => {
  const [count, setCount] = useState<number>(8000);
  const [multi, setMulti] = useState<number>(2);
  const [result, setResult] = useState(0);

  const counterAddition = (e: any) => {
    setCount(e.target.value * 1000);
  };

  const multiPayment = (e: any) => {
    setMulti(e.target.value);
  };

  const resultCalc = () => {
    setResult(monthPayment() + firstPayment() + markUp());
  };

  const monthPayment = () => {
    return Math.floor((count / 100) * 9);
  };

  const firstPayment = () => {
    return Math.floor((count / 100) * 30);
  };

  const markUp = () => {
    const mp = monthPayment();
    const fp = firstPayment();
    return Math.floor(mp + fp);
  };

  return (
    <>
      <div className="calculatorBody">
        <form onChange={resultCalc}>
          <label>Стоимость товара: {count}</label>
          <input type="range" min={8} max={200} onChange={counterAddition} />
          <br />
          <label>Срок рассрочки: {multi}</label>
          <input type="range" min={2} max={12} onChange={multiPayment} />
        </form>
        <div className="calculatorResult">
          <div>
            Общая стоимость
            <p>{result}</p>
          </div>
          <p>Ежемесячный платеж</p>
          <p>{monthPayment()}</p>
          <p>Первый платеж</p>
          <p>{firstPayment()}</p>
          <p>Торговая наценка</p>
          <p>{markUp()}</p>
        </div>
      </div>
    </>
  );
};

export default Calculator;
