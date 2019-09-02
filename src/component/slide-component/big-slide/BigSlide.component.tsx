import React from 'react';
import './BigSlide.style.scss';
import AdaptiveImage, {AdaptiveImageProps as imgParameter} from "../../image-component/AdaptiveImage.component";
import getNotUndefinedString from "../../../interface/String";
import {Link} from "react-router-dom";
import CostPlatformBar, {CostPlatformBarProps} from "../../cost-platform-bar/CostPlatformBar.component";

export interface BigSlideProps {
  //* Parameter form main image
  mainImageParameter: imgParameter;
  //* Array with all image what show in right side
  addImage: [imgParameter, imgParameter, imgParameter, imgParameter];
  //* Name of item what print in top
  nameOfItem: string;
  //* Short text what print after image
  subtitle: string;
  //* Cost and platform parameter
  costPlatformParameters: CostPlatformBarProps
}

/**
 * Get group of image form
 * @param imageParameterContainer - array of image parameter
 * @param startIndex - start index of pa
 * @param endIndex
 */
const getGroupOfImage = (imageParameterContainer: imgParameter[], startIndex: number, endIndex: number) => {
  return imageParameterContainer
    .filter((v: imgParameter, index: number) => {
      return index >= startIndex && index < endIndex
    })
    .map(({className, ...imageParameter}: imgParameter, index: number) =>
      (<AdaptiveImage
        key={index}
        className={`image-bar__image ${getNotUndefinedString(className)}`}
        {...imageParameter}
      />)
    )
};
//* Big slide component
const BigSlide: React.FC<BigSlideProps> =
  ({mainImageParameter, addImage, nameOfItem, subtitle, costPlatformParameters:{costParameter,platformParameter}}) => {
    return (
      <Link to={'/game'}>
        <article className={`big-slide`}>
          <AdaptiveImage
            className={`big-slide__main-image ${getNotUndefinedString(mainImageParameter.className)}`}
            {...mainImageParameter}
          />
          <section className="add-info">
            <article className="add-info__title">{nameOfItem}</article>
            <section className="image-bar">
              <div className="image-bar__pare">
                {/*get only 1 and 2 element*/}
                {getGroupOfImage(addImage, 0, 2)}
              </div>
              <div className="image-bar__pare">
                {/*get only 3 and 4 element*/}
                {getGroupOfImage(addImage, 2, 4)}
              </div>
            </section>
            <article className="add-info__subtitle">{subtitle}</article>
            <CostPlatformBar costParameter={costParameter} platformParameter={platformParameter}/>
          </section>
        </article>
      </Link>
    )
  };

export default BigSlide;