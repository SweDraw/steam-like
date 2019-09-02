import React, {ReactNode} from 'react';
import './ListItem.style.scss';
import getNotUndefinedString from "../../interface/String";

export interface ListItemProps {
  className?:string;
  children?: ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({children,className}) => {

  return (
    <li className={`list-item ${getNotUndefinedString(className)}`}>
      {children}
    </li>
  )
};

export default ListItem;