import React from "react";
import { useSpringCarousel } from "react-spring-carousel";
import "../sass/layout/carousel.scss";
import CarouselItem from "../layout/carouselItem";

const hashCode = (str: string) => {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return String(hash);
};

const sponsorList = [
  {
    id: hashCode("item1"),
    item: "item1",
  },
  {
    id: hashCode("item2"),
    item: "item2",
  },
  {
    id: hashCode("item3"),
    item: "item3",
  },
];

const Carousel: React.FC = () => {
  const { carouselFragment } = useSpringCarousel({
    withLoop: true,
    itemsPerSlide: 2,
    items: sponsorList.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem>{i.item}</CarouselItem>,
    })),
  });

  return (
    <div className="carouserWrapper">
      <h1>Наши партнеры</h1>
      <div className="carouselContainer">{carouselFragment}</div>
    </div>
  );
};

export default Carousel;
