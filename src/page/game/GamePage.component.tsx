import React from 'react';
import './GamePage.style.scss';
import AdaptiveImage from "../../component/image-component/AdaptiveImage.component";
import {ImageSet} from "../../interface/ImageSaveParameter";
import {ImageSizeSet} from "../../interface/Image";
import GameList from "../../component/game/game-list/GameList.component";
import CostPlatformBar from "../../component/cost-platform-bar/CostPlatformBar.component";
import List from "../../component/list/List.component";
import {IconsTypes} from "../../component/icon/Icon.component";
import SmallSlideExample from "../../component/slider-component/small-slider/SmallSlideExample";
import SmallSlider from "../../component/slider-component/small-slider/SmallSlider.component";

export interface GamePageProps {

}

const GamePage: React.FC<GamePageProps> = () => {
  //! Get random image
  const MainImage: ImageSizeSet = ImageSet[Math.floor(Math.random() * ImageSet.length)].imageNames;
  //! Main text
  const MainText: string = 'For The King — это стратегическая RPG, которая сочетает в себе элементы настолки и рогалика в захватывающем приключении, меняющем судьбы королевств. Можно играть в одиночку или в компании с другими игроками как онлайн, так и по локальной сети.';

  return (

    <section className="game">
      <article className="game__top">
        <AdaptiveImage altText={'game main image'} imageNames={MainImage}/>
        <section className="game__info">
          <article className="game__small-text">
            {MainText}
          </article>
          <GameList/>
        </section>
      </article>
      <section className="game__section">
        <article className="game__bar">
          <article className="game__cost">
            <p className="game__name">For The King </p>
            <CostPlatformBar
              costParameter={{valuate: '$', cost: 15}}
              platformParameter={{isPSSupport: true, isXBoxSupport: true}}
            />
          </article>
          <section className="game__about">
            <article className="game__small">
              <p>OUT NOW IN FULL RELEASE! </p><p>
              For The King is now available in full release! We'd like to thank all of our Early Access players for
              their
              support, and welcome to all new players! Fahrul awaits, happy adventuring!
            </p>
              <p>
                Remember, if you want to continue your adventure on your current save file, switch to the Legacy version
                in
                the properties menu of Steam;</p>
              <ul>
                <li>Right click the game in your Library</li>
                <li>Go to Properties</li>
                <li>Select the Beta Tab</li>
                <li>In the dropdown, choose Legacybranch</li>
              </ul>
            </article>
            <article className="game__small">
              ОБ ЭТОЙ ИГРЕ
              <p>
                Король мертв, убит неизвестным противником. И теперь некогда мирное королевство Фарул погрузилось в
                хаос.</p>
              <p>
                Вариантов не осталось, а казна опустела. Отчаявшись, королева обращается к подданным, чтобы те помогли
                сдержать подступающую роковую бурю. Начните путешествие с импровизированной группой в одиночку или в
                локальном
                либо сетевом кооперативе. Разделите группу, чтобы занять территорию, или держитесь вместе для защиты.
                Продуманная стратегия может стать решающим фактором выживания.</p>
              <p>
                For The King — это увлекательная смесь элементов стратегии, JRPG и «рогалика». Каждая игра уникальна
                благодаря
                процедурно-генерируемым картам, заданиям и событиям. Взгляните жестокости в глаза, бейтесь со злобными
                существами, бороздите моря и погружайтесь в темный подземный мир. Никто из отправившихся в путешествие
                до
                вас
                не вернулся. Сможете ли вы положить конец Хаосу?</p>
              <p>
                Сражайтесь и умирайте всей группой в динамичной и брутальной пошаговой битве, используйте уникальную
                систему
                ячеек для атак и специальных возможностей. Ищите и собирайте травы для старой-доброй трубки, которая
                излечит
                раны и исцелит от болезней. Разбейте безопасный лагерь или столкнитесь лицом к лицу с ужасами, что
                приходят
                ночью.</p>
              <p>
                Помните, искатель приключений, что вы делаете это не ради богатства и славы, а для своей родины и за
                короля
                —
                For The King!</p>
            </article>
          </section>
          <article className="game__parameter">
            <span className={'game__parameter--title'}>СИСТЕМНЫЕ ТРЕБОВАНИЯ</span>
            <section className="parameter">
              <article className="parameter__list">
                МИНИМАЛЬНЫЕ:<br/>
                Требуются 64-разрядные процессор и операционная система<br/>
                <span>ОС:</span> Windows 7 / 8 / 8.1 / 10 x64<br/>
                <span>Процессор:</span> Intel Core2 Duo E4300 (2 * 1800) / AMD Athlon Dual Core 4450e (2 * 2300) or
                equivalent<br/>
                <span>Оперативная память:</span> 4096 MB ОЗУ<br/>
                <span>Видеокарта:</span> GeForce 8800 GTX (768 MB) / Intel HD 4600 / Radeon HD 3850 (512 MB)<br/>
                <span>DirectX:</span> Версии 9.0c<br/>
                <span>Место на диске:</span> 3 GB<br/>

              </article>
              <article className="parameter__list">
                РЕКОМЕНДОВАННЫЕ:<br/>
                Требуются 64-разрядные процессор и операционная система<br/>
                <span>ОС:</span> Windows 7 / 8 / 8.1 / 10 x64<br/>
                <span>Процессор:</span> Intel Core i5-4570T (2* 2900) / AMD FX-6100 (6 * 3300) or equivalent<br/>
                <span>Оперативная память:</span> 4096 MB ОЗУ<br/>
                <span>Видеокарта:</span> GeForce GTX 750 Ti (2048 MB) / Radeon HD 7850 (2048 MB)<br/>
                <span>DirectX:</span> Версии 9.0c<br/>
                <span>Место на диске:</span> 3 GB<br/>
              </article>
            </section>

          </article>
        </article>
        <article className="game__bar">
          <p className="game__title">Type game</p>
          <List
            className="game__type"
            listItems={[
              {icon: IconsTypes.User, text: 'Для одного игрока', hrefWay: '/'},
              {icon: IconsTypes.Users, text: 'Для нескольких игроков', hrefWay: '/'},
              {icon: IconsTypes.Users, text: 'Мультиплеер по сети', hrefWay: '/'},
              {icon: IconsTypes.Users, text: 'Мультиплеер по сети', hrefWay: '/'},
              {icon: IconsTypes.Friend, text: 'Локальный мультиплеер', hrefWay: '/'},
              {icon: IconsTypes.Friend, text: 'Кооперативная игра по сети', hrefWay: '/'},
              {icon: IconsTypes.Friend, text: 'Локальный кооператив', hrefWay: '/'},
              {icon: IconsTypes.Friend, text: 'Общий/Разделенный экран', hrefWay: '/'},
              {icon: IconsTypes.PS, text: 'Контроллер (полностью)', hrefWay: '/'},
              {icon: IconsTypes.User, text: 'Коллекционные карточки', hrefWay: '/'},
            ]}
          />
          <p className="game__title">Language support:</p>
          <List
            className="game__type"
            listItems={[
              {text: 'русский', hrefWay: '/'},
              {text: 'английский', hrefWay: '/'},
              {text: 'французский', hrefWay: '/'},
              {text: 'итальянский', hrefWay: '/'},
              {text: 'немецкий', hrefWay: '/'},
              {text: 'испанский', hrefWay: '/'},
              {text: 'бр. португальский', hrefWay: '/'},
              {text: 'китайский (упр.) ', hrefWay: '/'},
              {text: 'китайский (трад.)', hrefWay: '/'},
              {text: 'польский', hrefWay: '/'},
            ]}
          />
        </article>
      </section>
      <section className="game__like">
        <p className="game__title">Game like this</p>
        <SmallSlider slides={[...SmallSlideExample, ...SmallSlideExample]}/>
        <p className="game__title">Popular game</p>
        <SmallSlider slides={[...SmallSlideExample, ...SmallSlideExample]}/>
      </section>
    </section>
  )
};

export default GamePage;