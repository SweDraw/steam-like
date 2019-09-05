import React from 'react';
import './Main.style.scss';
import BigSlider, {bigSlideParameter} from "../../component/slider-component/big-slider/BigSlider.component";
import MainSlider from "../../component/slider-component/main-slider/MainSlider.component";
import LinkBar, {ExampleLinkBarParameter} from "../../component/link-bar/LinkBar.component";
import SmallSlider from "../../component/slider-component/small-slider/SmallSlider.component";
import SmallSlideExample from "../../component/slider-component/small-slider/SmallSlideExample";
import MainSlideExample from "../../component/slide-component/main-slide/MainSlideExample";

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
        ...MainSlideExample,
        MainSlideExample[3]
      ]}
      />
      <LinkBar links={ExampleLinkBarParameter}/>
      <SmallSlider slides={[...SmallSlideExample,...SmallSlideExample]}/>
    </div>
  )
};
export default Main;