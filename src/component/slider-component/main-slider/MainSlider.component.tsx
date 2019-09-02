import React from 'react';
import './MainSlider.style.scss';
import Slider, {Settings} from "react-slick";
import MainSlide, {MainSlideProps} from "../../slide-component/main-slide/MainSlide.component";

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

    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 320,
        settings:{
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Slider className={'main-slider'} {...setting}>
      {slides.map((slide) => <MainSlide key={slide.idItem} {...slide}/>)}
    </Slider>
  )
};

export default MainSlider;