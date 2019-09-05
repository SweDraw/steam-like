import React from 'react';
import './SideNav.style.scss';
import getNotUndefinedString from "../../interface/String";
import List from "../list/List.component";
import {ListItemLinkProps} from "../list-item/ListItemLink.component";

export interface SideNavProps {
  navItems: ListItemLinkProps[];
  className?: string;
}

const SideNav: React.FC<SideNavProps> = ({navItems,className}) => {

  return (
    <nav className={`side-nav ${getNotUndefinedString(className)}`}>
      <List listItems={navItems}/>
    </nav>
  )
};

export default SideNav;