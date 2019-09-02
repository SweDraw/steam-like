import React from 'react';
import './Video.style.scss';
import {AdaptiveHeight, AdaptiveWidth, Size} from "../../../interface/Size";
import {Link} from "react-router-dom";

interface VideoParameter {
  className?: string;
  height?: Size;
  isAdaptiveVideo?: boolean;
  videoName: string;
  hrefOnVideo: string;
}

export interface VideoProps extends VideoParameter {
  isInfinite?: boolean;
  isMute?: boolean;
  width?: Size;
  isAutoplay?: boolean;
}


const Video: React.FC<VideoProps> = (
  {isAutoplay = false, isInfinite = false, isMute = false, className, videoName,
    isAdaptiveVideo, width, height, hrefOnVideo}) => {
  const video = require(`../../../videos/${videoName}`);
  const widthSize: AdaptiveWidth = isAdaptiveVideo ? {width: width} : {maxWidth: width};
  const heightSize: AdaptiveHeight = isAdaptiveVideo ? {height: height} : {maxHeight: height};

  return (
    <Link
      to={hrefOnVideo}
      className={'video__link'}
      style={Object.assign({}, widthSize, heightSize)} //* Combine width and height
    >
      <video
        autoPlay={isAutoplay}
        muted={isMute}
        loop={isInfinite}
        src={video}
        className={`video ${className}`}
      />
    </Link>
  )
};

export const BackgroundVideo: React.FC<VideoParameter> = ({className, ...videoParameter}) => {
  return (
    <Video
      isAutoplay={true}
      isInfinite={true}
      isMute={true}
      className={`video--background ${className}`}
      width={'100%'}
      {...videoParameter}
    />
  )
};


export default Video;