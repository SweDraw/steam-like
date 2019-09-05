import React from 'react';
import './Main.style.scss';
import BigSlider, {bigSlideParameter} from "../../component/slider-component/big-slider/BigSlider.component";
import MainSlider from "../../component/slider-component/main-slider/MainSlider.component";
import LinkBar, {ExampleLinkBarParameter} from "../../component/link-bar/LinkBar.component";
import SmallSlider from "../../component/slider-component/small-slider/SmallSlider.component";
import SmallSlideExample from "../../component/slider-component/small-slider/SmallSlideExample";
import MainSlideExample from "../../component/slide-component/main-slide/MainSlideExample";
import LazyLoadVideo from "../../component/video-component/lazy-load-video/LazyLoadVideo.component";
import TableListItemExample from "../../component/table-list-item/TableListExample";
import TableList from "../../component/table-list/TableList.component";

export interface MainProps {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className="main-page">
      <LazyLoadVideo
        hrefOnVideo={'/game'}
        videoName={'webm_page_bg_russian.webm'}
        isMute={true}
        isInfinite={true}
        isAdaptiveVideo={true}
        isAutoplay={true}
        loadText={'Video load'}
      />
      <BigSlider slides={
        [
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
          bigSlideParameter,
        ]
      }/>
      <MainSlider slides={[
        ...MainSlideExample,
        MainSlideExample[3]
      ]}
      />
      <LinkBar links={ExampleLinkBarParameter}/>
      <SmallSlider slides={[...SmallSlideExample, ...SmallSlideExample]}/>
      <TableList className={'main-page__table'} tableListParameter={[...TableListItemExample,...TableListItemExample]}/>
      <SmallSlider slides={[...SmallSlideExample, ...SmallSlideExample]}/>
    </div>
  )
};
export default Main;