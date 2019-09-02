import React from 'react';
import './MainSlide.style.scss';
import {Link} from 'react-router-dom';
import AdaptiveImage, {AdaptiveImageProps} from "../../image-component/AdaptiveImage.component";
import {AoF, Rust, Skyrim, TwoPointHospital, Warframe} from "../../../interface/ImageSaveParameter";
import getString from "../../../interface/String";
import Cost, {CostProps} from "../../cost/Cost.component";
import InfoBar, {InfoBarProps, MainInfoBarProps} from "../../slide-component/info-bar/InfoBar.component";

export interface MainSlideProps extends MainInfoBarProps{
  //* parameter form image in slide
  imageParameter: AdaptiveImageProps;
  //* id slide use to link to web page
  idItem: number;
  //* Big text in center in slide
  title: string;
  //* small text in center in slide where prints not main information
  text: string;

}

export const MainSlideExemple: MainSlideProps[] = [
  {
    idItem: 1,
    title: getString(Warframe.className),
    text: 'Already sale',
    imageParameter: {...Warframe},
    costParameter: {
      cost: 35,
      sale: 25,
      valuate:'$'
    },
    platformParameter:{
      isWindowsSupport: true
    }
  },
  {
    idItem: 2,
    title: getString(Rust.className),
    text: 'Already sale',
    imageParameter: {...Rust},
    costParameter: {
      cost: 35,
      sale: 25,
      valuate:'$'
    },
    platformParameter:{
      isWindowsSupport: true
    }
  },
  {
    idItem: 3,
    title: getString(AoF.className),
    text: 'Already sale',
    imageParameter: {...AoF},
    costParameter: {
      cost: 35,
      sale: 25,
      valuate:'$'
    },
    platformParameter:{
      isWindowsSupport: true
    }
  },
  {
    idItem: 4,
    title: getString(Skyrim.className),
    text: 'Already sale',
    imageParameter: {...Skyrim},
    costParameter: {
      cost: 35,
      sale: 25,
      valuate:'$'
    },
    platformParameter:{
      isWindowsSupport: true
    }
  },
  {
    idItem: 5,
    title: getString(TwoPointHospital.className),
    text: 'Already sale',
    imageParameter: {...TwoPointHospital},
    costParameter: {
      cost: 35,
      sale: 25,
      valuate:'$'
    },
    platformParameter:{
      isWindowsSupport: true
    }
  },

];

const MainSlide: React.FC<MainSlideProps> = ({imageParameter, title, text, costParameter,platformParameter, idItem}) => {

  return (
    <article className="main-slide">
      <Link className={'main-slide__link'} to={`/game/${idItem}`}>
        <AdaptiveImage className={`main-slider__image`} {...imageParameter}/>
        <section className="slide-info">
          <article className="slide-info__title">{title}</article>
          <article className="slide-info__text">{text}</article>
          <InfoBar costParameter={costParameter} platformParameter={platformParameter}/>
        </section>
      </Link>
    </article>
  )
};

export default MainSlide;