import React from 'react';
import './SmallSlide.style.scss';
import AdaptiveImage, {AdaptiveImageProps} from "../../image-component/AdaptiveImage.component";
import CostPlatformBar, {CostPlatformBarProps} from "../../cost-platform-bar/CostPlatformBar.component";
import {Link} from "react-router-dom";

export interface SmallSlideProps {
  imageParameter: AdaptiveImageProps;
  costPlatformParameter: CostPlatformBarProps;
}

const SmallSlide: React.FC<SmallSlideProps> = ({imageParameter, costPlatformParameter}) => {
  return (
    <article className="small-slide">
      <Link to={'/game'} className={'small-slide__link'}>
        <AdaptiveImage className={`small-slide__image`} {...imageParameter}/>
        <CostPlatformBar {...costPlatformParameter}/>
      </Link>
    </article>
  )
};

export default SmallSlide;