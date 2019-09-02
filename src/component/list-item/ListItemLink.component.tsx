import React, {ReactNode} from 'react';
import './ListItem.style.scss';
import ListItem, {ListItemProps} from "./ListItem.component";
import {Link} from 'react-router-dom';
import Icon, {IconsTypes} from "../icon/Icon.component";

export interface ListItemLinkProps extends ListItemProps {
  icon?: IconsTypes;
  hrefWay: string;
  children:ReactNode;
}

export const isListItemLink = (element: any): element is ListItemLinkProps => {
  return 'hrefWay' in element
};

const ListItemLink: React.FC<ListItemLinkProps> = ({children, hrefWay, icon, className}) => {

  return (
    <ListItem className={className}>
      <Link className="list-item__link" to={hrefWay}>
        {icon && <Icon typeIcon={icon} />}
        {children}
      </Link>
    </ListItem>
  )
};

export default ListItemLink;