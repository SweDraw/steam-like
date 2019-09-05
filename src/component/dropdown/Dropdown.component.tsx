import React from 'react';
import './Dropdown.style.scss';
import Button, {ButtonMouseEvent} from "../button/Button.component";
import List from "../list/List.component";
import Icon, {IconsTypes} from "../icon/Icon.component";
import {DropdownItemProps} from "./DropdownItem";
import getNotUndefinedString from "../../interface/String";

export enum DropdownType{
  List = 'dropdown--list',
  Menu = 'dropdown--menu',
}

export interface DropdownProps {
  listLink: DropdownItemProps[];
  headerText: string;
  typeDropdown?: DropdownType;
}

export const isDropdown = (element: any): element is DropdownProps =>
  'listLink' in element
  && 'headerText' in element;

const dropdown = (event: ButtonMouseEvent): void => {
  event.preventDefault();
  //* Get button
  const element: HTMLElement = event.target as HTMLElement;
  //* Get dropdown container
  const dropdownContainer: HTMLElement = element.parentElement as HTMLElement;
  dropdownContainer.classList.toggle('dropdown--active')
};

const Dropdown: React.FC<DropdownProps> = ({listLink,headerText, typeDropdown}) => {

  return (
    <section className={`dropdown ${getNotUndefinedString(typeDropdown)}`}>
      <Button
        className={`dropdown__button`}
        handleClick={dropdown}
      >
        {headerText}<Icon typeIcon={IconsTypes.ArrowTop}/>
      </Button>
      <List
        className={`dropdown__list`}
        listItems={listLink}
      />
    </section>
  )
};

export default Dropdown;