import React from 'react';
import './GamePage.style.scss';
import SmallSlider from "../../component/slider-component/small-slider/SmallSlider.component";
import {SmallSlideExample} from "../../component/slide-component/small-slide/SmallSlide.component";
import TableList from "../../component/table-list/TableList.component";
import TableListItemExample from "../../component/table-list-item/TableListExample";

export interface GamePageProps {

}

const GamePage: React.FC<GamePageProps> = () => {

  return (
    <section className="game-page">
      <SmallSlider slides={[...SmallSlideExample, ...SmallSlideExample]}/>
      <TableList tableListParameter={[...TableListItemExample,...TableListItemExample,...TableListItemExample,...TableListItemExample,...TableListItemExample]}/>
    </section>
  )
};

export default GamePage;