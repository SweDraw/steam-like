import React from 'react';
import './SmallSlide.style.scss';
import AdaptiveImage, {AdaptiveImageProps} from "../../image-component/AdaptiveImage.component";

export interface SmallSlideProps {
  imageParameter: AdaptiveImageProps;
  sale: number;
  cost: number;
}

const SmallSlide: React.FC<SmallSlideProps> = ({sale, cost, imageParameter}) => {

  return (
    <article className="small-slide">
      <AdaptiveImage className={`small-slider__image`} {...imageParameter}/>
      <article className="small-slide__cost">
        {sale && <div className="small-slide__sale">{`-${sale}%`}</div>}
        <div className="small-slide__full-cost">
          {sale && <div className="small-slide__start-cost">{cost}</div>}
          <div className="small-slide__end-cost">{sale ? (cost * sale) / 100 : cost}</div>
        </div>
      </article>

    </article>
  )
};

export default SmallSlide;