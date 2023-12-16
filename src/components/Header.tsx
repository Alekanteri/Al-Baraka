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
          <span>
            Работаем более 8 лет и нам доверяют <br /> более 40 000 довольных
            клиентов
          </span>
        </div>
        <div className="header-center-container">
          <FaWhatsapp size={20} />
          <FaTelegramPlane size={20} />
          <SlSocialVkontakte size={20} />
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
