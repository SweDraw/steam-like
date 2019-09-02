import React from 'react';
import './Image.style.scss';
import {getSize} from "../../../interface/Size";
import ImageParameter, {AdditionalImageParameter, srcSet} from "../../../interface/Image";

/**
 * Image parameter props
 */
export interface ImageProps extends ImageParameter, AdditionalImageParameter {

}

const Image: React.FC<ImageProps> = ({imageNames, altText, size, isAdaptiveImage = false, className}) => {
  return (
    <img
      className={`image ${className}`}
      alt={altText}
      srcSet={srcSet(imageNames)}
      style={getSize(size, isAdaptiveImage)} //* Combine width and height
    />
  )
};

export default Image;