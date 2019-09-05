import React from 'react';
import './SideNav.style.scss';
import Dropdown, {DropdownProps, isDropdown} from "../dropdown/Dropdown.component";
import {Link, LinkProps} from "react-router-dom";
import getNotUndefinedString from "../../interface/String";

export type SideNavComponent = DropdownProps | LinkProps;

export interface SideNavProps {
  navItems: SideNavComponent[];
  className?: string;
}

const createSideNavItem = (item: SideNavComponent, key: string|number): JSX.Element => {
  if (isDropdown(item)) {
    return (<Dropdown key={key} {...item} />)
  } else {
    return (<Link key={key} {...item}/>)
  }
};

const SideNav: React.FC<SideNavProps> = ({navItems,className}) => {

  return (
    <nav className={`side-nav ${getNotUndefinedString(className)}`}>
      {navItems.map((item: SideNavComponent, index: number) => createSideNavItem(item,index))}
    </nav>
  )
};

export default SideNav;