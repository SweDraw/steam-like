import React from 'react';
import './Video.style.scss';

export interface VideoProps {
  isAutoplay?: boolean;
  isInfinite?: boolean;
  isMute?: boolean;
  videoName: string;
}

const Video: React.FC<VideoProps> = ({isAutoplay = false, isInfinite = false, isMute = false, videoName}) => {
  return (
    <video src="" className="video"></video>
  )
};


export default Video;