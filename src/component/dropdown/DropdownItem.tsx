import React from 'react';
import './Dropdown.style.scss';
import ListItemLink from "../list-item/ListItemLink.component";
import {IconsTypes} from "../icon/Icon.component";
import getNotUndefinedString from "../../interface/String";

export interface DropdownItemProps {
  //* Icon what add to element
  icon?: IconsTypes;
  //* href to web page
  hrefWay: string;
  //* text what add to dropdown
  text: string;
  //* Class name what add if it need
  className?: string;
}
//* Dropdown item component
const Dropdown: React.FC<DropdownItemProps> = ({className, ...linkParameter}) => {
  return (
    <ListItemLink className={`dropdown__item ${getNotUndefinedString(className)}`} {...linkParameter}/>
  )
};

export default Dropdown;