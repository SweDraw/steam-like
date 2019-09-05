import React, {MouseEvent as ReactMouseEvent} from 'react';
import './SideBar.style.scss';
import {ButtonMouseEvent} from "../button/Button.component";
import Dropdown from "../dropdown/Dropdown.component";
import DropdownExample from "../dropdown/DropdownExample";
import SideNav from "../side-nav/SideNav.component";

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
      <SideNav navItems={[...DropdownExample]}/>
      <div className={'side-bar__hide'} onClick={hideSideBar}/>
    </section>
  )
};

export default SideBar;