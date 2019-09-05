import React from 'react';
import './MainSlide.style.scss';
import {Link} from 'react-router-dom';
import AdaptiveImage, {AdaptiveImageProps} from "../../image-component/AdaptiveImage.component";
import CostPlatformBar, {CostPlatformBarProps} from "../../cost-platform-bar/CostPlatformBar.component";

export interface MainSlideProps {
  //* parameter form image in slide
  imageParameter: AdaptiveImageProps;
  //* id slide use to link to web page
  idItem: number;
  //* Big text in center in slide
  title: string;
  //* small text in center in slide where prints not main information
  text: string;
  //* Cost and platform parameter
  costPlatformParameter: CostPlatformBarProps;
}

const MainSlide: React.FC<MainSlideProps> =
  ({imageParameter, title, text, costPlatformParameter, idItem}) => {
  return (
    <article className="main-slide">
      <Link className={'main-slide__link'} to={'/game'}>{/*to={`/game/${idItem}`}*/}
        <AdaptiveImage className={`main-slider__image`} {...imageParameter}/>
        <section className="slide-info">
          <article className="slide-info__title">{title}</article>
          <article className="slide-info__text">{text}</article>
          <CostPlatformBar {...costPlatformParameter}/>
        </section>
      </Link>
    </article>
  )
};

export default MainSlide;