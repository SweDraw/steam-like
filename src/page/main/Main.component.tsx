import React from 'react';
import './Main.style.scss';
import BigSlider, {bigSlideParameter} from "../../component/slider-component/big-slider/BigSlider.component";
import MainSlider from "../../component/slider-component/main-slider/MainSlider.component";
import {MainSlideExemple} from "../../component/slide-component/main-slide/MainSlide.component";
import LinkBar, {ExampleLinkBarParameter} from "../../component/link-bar/LinkBar.component";
import SmallSlider from "../../component/slider-component/small-slider/SmallSlider.component";
import {SmallSlideExample} from "../../component/slide-component/small-slide/SmallSlide.component";

export interface MainProps {

}


const Main: React.FC<MainProps> = () => {

  return (
    <div className="main-page">
      <BigSlider slides={
        [
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
        ]
      }/>
      <MainSlider slides={[
        ...MainSlideExemple,
        MainSlideExemple[3]
      ]}
      />
      <LinkBar links={ExampleLinkBarParameter}/>
      <SmallSlider slides={[...SmallSlideExample,...SmallSlideExample]}/>
    </div>
  )
};

export default Main;