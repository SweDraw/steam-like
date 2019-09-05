import React from 'react';
import './ListItem.style.scss';
import ListItem, {ListItemProps} from "./ListItem.component";
import {Link} from 'react-router-dom';
import Icon, {IconsTypes} from "../icon/Icon.component";
import getNotUndefinedString from "../../interface/String";

export interface ListItemLinkProps extends ListItemProps {
  icon?: IconsTypes;
  hrefWay: string;
  text:string;
  className?: string;
}

export const isListItemLink = (element: any): element is ListItemLinkProps => {
  return 'hrefWay' in element
};

const ListItemLink: React.FC<ListItemLinkProps> = ({text, hrefWay, icon, className}) => {

  return (
    <ListItem className={getNotUndefinedString(className)}>
      <Link className={`list-item--link`} to={hrefWay}>
        {icon && <Icon typeIcon={icon} />}
        <span className="list-item__text">{text}</span>
      </Link>
    </ListItem>
  )
};

export default ListItemLink;