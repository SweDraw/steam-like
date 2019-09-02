import React from 'react';
import './Image.style.scss';
import Image from "./Image.component";
import ImageParameter from "../../../interface/Image";

export interface AdaptiveImageProps extends ImageParameter{

}

const AdaptiveImage: React.FC<AdaptiveImageProps> = ({className, ...parameterImage}) => {

  return (
    <Image
      className={`image--adaptive ${className}`}
      {...parameterImage}
    />
  )
};

export default AdaptiveImage;