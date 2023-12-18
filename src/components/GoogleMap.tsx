import React from "react";
import "../sass/components/googlemap.scss";

const GoogleMap: React.FC = () => {
  return (
    <div className="google-map-main-container">
      <div className="container">
        <div className="gradient-cards">
          <div className="card--element">
            <div className="container-card bg-green-box">
              <p className="card-title">Контакты</p>
              <p className="card-description text-center">Телефон для связи:</p>
              <div className="card-phone">
                <a href="tel:+7 (938) 007-37-77">+7 (938) 007-37-77</a> <br />
              </div>
              <p className="card-description text-center ">Ежедневно: 9:00 - 21:00</p>
              <span className="card-description text-center ">Приходите в гости:</span>

            </div>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.976708454404!2d44.80796747596546!3d43.168013071129295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40506d0c4d714fdd%3A0xd9e5160c06bc06c5!2z0YPQuy4g0JAuINCT0L7RgNGH0YXQsNC90L7QstCwLCAxMiwg0JzQsNCz0LDRgSwg0KDQtdGB0L8uINCY0L3Qs9GD0YjQtdGC0LjRjywgMzg2MDAx!5e0!3m2!1sru!2sru!4v1702669163195!5m2!1sru!2sru&style=feature:road|color:0xffffff" className="w-full h-[450px]"></iframe>
    </div >
  );
};

export default GoogleMap;
