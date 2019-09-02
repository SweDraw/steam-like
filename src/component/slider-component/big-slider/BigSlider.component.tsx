import React from 'react';
import './BigSlider.style.scss';
import Slider, {Settings} from "react-slick";
import BigSlide, {BigSlideProps} from "../../slide-component/big-slide/BigSlide.component";
import {AoF, ImageParameterSet, Rust, Skyrim, TwoPointHospital, Warframe} from "../../../interface/ImageSaveParameter";



export const bigSlideParameter:BigSlideProps = {
  mainImageParameter:ImageParameterSet(true, Warframe),
  costPlatformParameters:{
    platformParameter:{
      isWindowsSupport: true
    },
    costParameter: {
      valuate: '$',
      sale: 25,
      cost:35
    }
  },
  subtitle: 'Now ready',
  nameOfItem: Warframe.altText,
  addImage:[
    ImageParameterSet(false,Rust),
    ImageParameterSet(false,TwoPointHospital),
    ImageParameterSet(false,Skyrim),
    ImageParameterSet(false,AoF)
  ]
};

export interface BigSliderProps {
  slides: BigSlideProps[];
}

const BigSlider: React.FC<BigSliderProps> = ({slides}) => {
  const setting: Settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    //autoplay: true,
    //autoplaySpeed: 5000,

  };
  return (
    <Slider className={'big-slider'} {...setting}>
      {slides.map((element,index) =>
        <BigSlide key={index} {...element}/>
      )}
    </Slider>
  )
};

export default BigSlider;