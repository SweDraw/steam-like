import React from 'react';
import './MainSlider.style.scss';
import MainSlide, {MainSlideProps} from "../../slider-component/main-slide/MainSlide.component";
import Slider, {Settings} from "react-slick";

export interface MainSliderProps {
  slides: MainSlideProps[];

}

const MainSlider: React.FC<MainSliderProps> = ({slides}) => {
  const setting:Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad:"progressive",
   // autoplay: true,
   // autoplaySpeed: 5000,
  };
  return (
    <Slider className={'main-slider'} {...setting}>
      {slides.map((slide) => <MainSlide key={slide.idItem} {...slide}/>)}
    </Slider>
  )
};

export default MainSlider;