import React from "react";
import "../sass/components/header.scss";
import logo from "../assets/img/logo.svg";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header--container">
        <div className="header-left-container">
          <img width={180} height={180} src={logo} alt="logo" />
          <span className="text-[12px]">
            Работаем более 8 лет и нам доверяют <br /> более 40 000 довольных
            клиентов
          </span>
        </div>
        <div className="header-center-container">
          <a
            target="_blank"
            href="https://wa.me/79380073777?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BF%D1%80%D0%BE%20%D1%80%D0%B0%D1%81%D1%81%D1%80%D0%BE%D1%87%D0%BA%D1%83!"
          >
            {" "}
            <FaWhatsapp size={20} />
          </a>
          <a target="_blank" href="https://t.me/al_baraka_ing">
            <FaTelegramPlane size={20} />
          </a>
          <a target="_blank" href="https://vk.com/al.baraka">
            {" "}
            <SlSocialVkontakte size={20} />
          </a>
        </div>
        <div className="header-right-container">
          <div className="header-phone">
            <a href="tel:+7 (938) 007-37-77">+7 (938) 007-37-77</a> <br />
            <span>Ежедневно с 9:00 до 21:00</span>
          </div>
          <button className="relative mt-2 transition-all inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-[#2FB384]">
            <span className="relative text-[12px] px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#18181B] rounded-md group-hover:bg-opacity-0">
              Узнать условия
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
