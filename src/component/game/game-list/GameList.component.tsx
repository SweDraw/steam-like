import React from 'react';
import './GameList.style.scss';
import List from "../../list/List.component";

export interface GameListProps {

}

const GameList: React.FC<GameListProps> = () => {

  return (
    <section className="game-list">
      <article className="game-list__section">
        <span className="game-list__title">Rate:</span>
        <span className="game-list__text">Very good</span>
      </article>
      <article className="game-list__section">
        <span className="game-list__title">Data publication: </span>
        <span className="game-list__text">19 апр. 2018</span>
      </article>
      <article className="game-list__section">
        <span className="game-list__title">Publisher:</span>
        <List className={'game-list__list'} listItems={[
          {hrefWay: '/publisher', text: 'IronOak Games'},
          {hrefWay: '/publisher', text: 'IronOak Games'},
          {hrefWay: '/publisher', text: 'IronOak Games'},
        ]}/>
      </article>
      <article className="game-list__section">
        <span className="game-list__title">Creator:</span>
        <List className={'game-list__list'} listItems={[
          {hrefWay: '/creator', text: 'Curve Digital'},
          {hrefWay: '/creator', text: 'Curve Digital'},
          {hrefWay: '/creator', text: 'Curve Digital'},
        ]}/>
      </article>
      <article className="game-list__section">
        <List className={'game-list__list game-list__list--genre'} listItems={[
          {hrefWay: '/genre', text: 'Ролевая игра'},
          {hrefWay: '/genre', text: 'Пошаговые сражения'},
          {hrefWay: '/genre', text: 'Кооператив'}
        ]}/>
      </article>
    </section>
  )
};

export default GameList;