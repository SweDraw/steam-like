import React, {MouseEvent as ReactMouseEvent} from 'react';
import './SideBar.style.scss';
import {ButtonMouseEvent} from "../button/Button.component";
import SideNav from "../side-nav/SideNav.component";
import {IconsTypes} from "../icon/Icon.component";

export interface SideBarProps {

}


export const openSideBar = (event: ButtonMouseEvent): void => {
  event.preventDefault();
  event.stopPropagation();
  //* Class get form SideBar(default value) component class
  const sideBar: HTMLElement = document.getElementsByClassName('side-bar')[0] as HTMLElement;
  console.log(sideBar);
  sideBar.classList.add('side-bar--active');
};

export const hideSideBar = (event: ReactMouseEvent<HTMLDivElement, MouseEvent>): void => {
  event.preventDefault();
  event.stopPropagation();
  //* Class get form SideBar(default value) component class
  const sideBar: HTMLElement = document.getElementsByClassName('side-bar')[0] as HTMLElement;
  console.log(sideBar);
  sideBar.classList.remove('side-bar--active');
};

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <section className={`side-bar`}>
      <SideNav
        navItems={[
          {
            text: 'Log in',
            hrefWay: '/log',
            icon: IconsTypes.SingIn
          },
          {
            text: 'Magazine',
            hrefWay: '/magazine',
          },
          {
            text: 'Popular',
            hrefWay: '/popular'
          },
          {
            text: 'Favorite',
            hrefWay: '/favorite'
          }
        ]}
      />
      <div className={'side-bar__hide'} onClick={hideSideBar}/>
    </section>
  )
};

export default SideBar;