import React from 'react';
import './MainSlide.style.scss';
import {Link} from 'react-router-dom';
import AdaptiveImage, {AdaptiveImageProps} from "../../image-component/AdaptiveImage.component";
import {AoF, Rust, Skyrim, TwoPointHospital, Warframe} from "../../../interface/ImageSaveParameter";
import getNotUndefinedString from "../../../interface/String";
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

export const MainSlideExemple: MainSlideProps[] = [
  {
    idItem: 1,
    title: getNotUndefinedString(Warframe.className),
    text: 'Already sale',
    imageParameter: {...Warframe},
    costPlatformParameter: {
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
  {
    idItem: 2,
    title: getNotUndefinedString(Rust.className),
    text: 'Already sale',
    imageParameter: {...Rust},
    costPlatformParameter:{
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
  {
    idItem: 3,
    title: getNotUndefinedString(AoF.className),
    text: 'Already sale',
    imageParameter: {...AoF},
    costPlatformParameter:{
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
  {
    idItem: 4,
    title: getNotUndefinedString(Skyrim.className),
    text: 'Already sale',
    imageParameter: {...Skyrim},
    costPlatformParameter:{
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
  {
    idItem: 5,
    title: getNotUndefinedString(TwoPointHospital.className),
    text: 'Already sale',
    imageParameter: {...TwoPointHospital},
    costPlatformParameter:{
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
];

const MainSlide: React.FC<MainSlideProps> =
  ({imageParameter, title, text, costPlatformParameter, idItem}) => {
  return (
    <article className="main-slide">
      <Link className={'main-slide__link'} to={`/game/${idItem}`}>
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