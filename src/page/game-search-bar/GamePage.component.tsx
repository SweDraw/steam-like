import React from 'react';
import './GamePage.style.scss';
import SmallSlider from "../../component/slider-component/small-slider/SmallSlider.component";
import TableList from "../../component/table-list/TableList.component";
import TableListItemExample from "../../component/table-list-item/TableListExample";
import SmallSlideExample from "../../component/slider-component/small-slider/SmallSlideExample";

export interface GamePageProps {

}

const GameSearchBar: React.FC<GamePageProps> = () => {

  return (
    <section className="game-search-bar">
      <SmallSlider slides={[...SmallSlideExample, ...SmallSlideExample]}/>
      <TableList className={'game-search-bar__table-list'} tableListParameter={[...TableListItemExample,...TableListItemExample,...TableListItemExample,...TableListItemExample,...TableListItemExample]}/>
    </section>
  )
};

export default GameSearchBar;