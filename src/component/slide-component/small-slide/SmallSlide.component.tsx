import React from 'react';
import './SmallSlide.style.scss';
import AdaptiveImage, {AdaptiveImageProps} from "../../image-component/AdaptiveImage.component";
import CostPlatformBar, {
  CostPlatformBarProps,
  CostPlatformExample
} from "../../cost-platform-bar/CostPlatformBar.component";
import {AoF, Rust, Skyrim, TwoPointHospital, Warframe} from "../../../interface/ImageSaveParameter";

export interface SmallSlideProps {
  imageParameter: AdaptiveImageProps;
  costPlatformParameter: CostPlatformBarProps;
}

export const SmallSlideExample: SmallSlideProps[] = [
  {
    imageParameter: Warframe,
    costPlatformParameter: CostPlatformExample[0]
  },
  {
    imageParameter: Rust,
    costPlatformParameter: CostPlatformExample[1]
  },
  {
    costPlatformParameter: CostPlatformExample[2],
    imageParameter: AoF
  },
  {
    imageParameter: Skyrim,
    costPlatformParameter: CostPlatformExample[0]
  },
  {
    costPlatformParameter: CostPlatformExample[1],
    imageParameter: TwoPointHospital
  }
];


const SmallSlide: React.FC<SmallSlideProps> = ({ imageParameter, costPlatformParameter}) => {

  return (
    <article className="small-slide">
      <AdaptiveImage className={`small-slide__image`} {...imageParameter}/>
      <CostPlatformBar {...costPlatformParameter}/>
    </article>
  )
};

export default SmallSlide;