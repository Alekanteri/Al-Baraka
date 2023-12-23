import React from "react";
import "../sass/layout/scroll.scss";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const reveal = () => {
  let reveals = document.querySelectorAll(".reveal");
  for (let index = 0; index < reveals.length; index++) {
    const element = reveals[index];
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

const ScrollAnimation = ({ children }: Props) => {
  return <div className="reveal">{children}</div>;
};

export default ScrollAnimation;
