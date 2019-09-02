import React, {lazy, Suspense} from 'react';
import './LazyLoadVideo.style.scss';
import {BackgroundVideo, VideoProps} from "../video/Video.component";

const Video = lazy(() => import('../video/Video.component'));


export interface LazyLoadVideoProps extends VideoProps{
  isBackgroundVideo?: boolean;
  loadText?: string
}

const LazyLoadVideo: React.FC<LazyLoadVideoProps> = (
  {isBackgroundVideo = false,loadText = 'Load video...',className,...videoParameter}) => {
  const classNameLazyLoadVideo = `video--lazy-load ${className}`;
  return (
    <>
      <Suspense fallback={<div className="lazy__preset">{loadText}</div>}>
        {isBackgroundVideo
          ? <BackgroundVideo
            className={classNameLazyLoadVideo}
            {...videoParameter}
          />
          : <Video
            className={classNameLazyLoadVideo}
            {...videoParameter}
          />}
      </Suspense>
    </>
  )
};

export default LazyLoadVideo;