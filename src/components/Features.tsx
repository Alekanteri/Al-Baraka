import React from "react";
import "../sass/components/features.scss";

const Features: React.FC = () => {
  const [state, setState] = React.useState(false);

  console.log(state);

  return (
    <div className="features">
      <div className="text-3xl title-text">
        Почему более{" "}
        <b>
          40 000 <br /> клиентов
        </b>{" "}
        выбрали нас
      </div>
      <div className="progressbar">
        <div className="line"></div>
        <div>
          <div className="circle" style={{ background: "#286F6C" }}></div>
        </div>
        <div>
          <div className="circle" style={{ background: "#F2704E" }}></div>
        </div>
        <div>
          <div className="circle" style={{ background: "#EEC048" }}></div>
        </div>
      </div>

      <div className="features__item">
        <div className="angled-gradient">
          <h1 className="text-2xl">01</h1>
        </div>
        <h3>Одобрение в 98% случаев</h3>
        <span>
          Мы не требуем официального дохода, <br /> сбора справок и т.д. Если есть <br />
          постоянный доход, то вы получите рассрочку
        </span>
        <div className="angled-gradient">
          <h1 className="text-2xl">01</h1>
        </div>
        <h3>Одобрение в 98% случаев</h3>
        <span>
        Мы не требуем официального дохода, <br /> сбора справок и т.д. Если есть <br />
          постоянный доход, то вы получите рассрочку
        </span>
        <div className="angled-gradient">
          <h1 className="text-2xl">01</h1>
        </div>
        <h3>Одобрение в 98% случаев</h3>
        <span>
        Мы не требуем официального дохода, <br /> сбора справок и т.д. Если есть <br />
          постоянный доход, то вы получите рассрочку
        </span>
        <div className="angled-gradient">
          <h1 className="text-2xl">01</h1>
        </div>
        <h3>Одобрение в 98% случаев</h3>
        <span>
        Мы не требуем официального дохода, <br /> сбора справок и т.д. Если есть <br />
          постоянный доход, то вы получите рассрочку
        </span>
      </div>
    </div>
  );
};

export default Features;
