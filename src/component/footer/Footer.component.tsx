import React from 'react';
import './Footer.style.scss';
import Logo from "../logo/Logo.component";
import List from "../list/List.component";

export interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {

  return (
    <footer className="footer">
      <Logo/>
      <section className="footer__text">
        <List className={'footer__list'} listItems={[
          {hrefWay: '/confi', text: 'Политика конфиденциальности '},
          {hrefWay: '/prav', text: ' Правовая информация '},
          {hrefWay: '/sogl', text: ' Соглашение подписчика  '},
          {hrefWay: '/back', text: 'Возвраты '},
        ]}/>
      </section>
    </footer>
  )
};

export default Footer;