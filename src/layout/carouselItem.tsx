import React from "react";
import "../sass/layout/carousel.scss";

type carouselProps = {
  children: string | JSX.Element | JSX.Element[];
};

const CarouselItem = ({ children }: carouselProps) => {
  return <div className="carouselItemBody">{children}</div>;
};

export default CarouselItem;
