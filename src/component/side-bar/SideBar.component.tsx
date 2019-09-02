import React from 'react';
import './SideBar.style.scss';
import List from "../list/List.component";
import {ButtonMouseEvent} from "../button/Button.component";
import {ListItemLinkProps} from "../list-item/ListItemLink.component";
import {IconsTypes} from "../icon/Icon.component";

export interface SideBarProps {
  className?: string;
}
const SideBarClass = 'side-bar';
const SideBarActiveClass = 'side-bar--active';


const SideBarListItems: ListItemLinkProps[] = [
  {
    icon: IconsTypes.SingIn,
    hrefWay: '/log',
    children: 'Sign in'
  },
  {
    icon: IconsTypes.User,
    children: 'Socio',
    hrefWay: '/socio'
  }
];

export const openSideBar = (event:ButtonMouseEvent): void =>{
  event.preventDefault();
  event.stopPropagation();
  //* Class get form SideBar(default value) component class
  const sideBar:HTMLElement = document.querySelector(`.${SideBarClass}`) as HTMLElement;
  sideBar.classList.add(SideBarActiveClass);
};

export const hideSideBar = (event:ButtonMouseEvent):void => {
  event.preventDefault();
  event.stopPropagation();
  //* Class get form SideBar(default value) component class
  const sideBar:HTMLElement = document.querySelector(`.${SideBarClass}`) as HTMLElement;
  sideBar.classList.remove(SideBarActiveClass);
};

const SideBar: React.FC<SideBarProps> = ({className}) => {

  return (
    <section className={`${SideBarClass} ${className ? className : ''}`}>
      <List listItems={[...SideBarListItems]} className={`side-bar__menu`}/>
      <div className={'side-bar__hide'} onClick={hideSideBar}/>
    </section>
  )
};

export default SideBar;