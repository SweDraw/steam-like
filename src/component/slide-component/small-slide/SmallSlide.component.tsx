import React from 'react';
import './SmallSlide.style.scss';
import AdaptiveImage, {AdaptiveImageProps} from "../../image-component/AdaptiveImage.component";
import CostPlatformBar, {CostPlatformBarProps} from "../../cost-platform-bar/CostPlatformBar.component";

export interface SmallSlideProps {
  imageParameter: AdaptiveImageProps;
  costPlatformParameter: CostPlatformBarProps;
}

const SmallSlide: React.FC<SmallSlideProps> = ({imageParameter, costPlatformParameter}) => {
  return (
    <article className="small-slide">
      <AdaptiveImage className={`small-slide__image`} {...imageParameter}/>
      <CostPlatformBar {...costPlatformParameter}/>
    </article>
  )
};

export default SmallSlide;