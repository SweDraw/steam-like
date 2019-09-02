import React from 'react';
import './SmallSlider.style.scss';
import SmallSlide, {SmallSlideProps} from "../../slide-component/small-slide/SmallSlide.component";
import Slider, {Settings as SliderSettings} from "react-slick";

export interface SmallSliderProps {
  slides: SmallSlideProps[]
}

const SmallSlider: React.FC<SmallSliderProps> = ({slides}) => {

  const sliderParameter:SliderSettings = {
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    centerMode: true,
    lazyLoad:"progressive",
    dots: false,
    speed: 1000,
    draggable: true,
    responsive:[
      {
        breakpoint: 320,
        settings:{
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <Slider className="small-slider" {...sliderParameter}>
      {slides.map((slide: SmallSlideProps, index: number) =>
        <SmallSlide key={index} {...slide}/>
      )}
    </Slider>
  )
};

export default SmallSlider;