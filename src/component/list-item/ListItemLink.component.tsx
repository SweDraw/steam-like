import React from 'react';
import './ListItemLink.style.scss';
import { Link } from 'react-router-dom';

export interface ListItemProps {
  iconClass:string;
  hrefWay:string;
  textInside:string;
  className?:string;
}

const ListItemLink: React.FC<ListItemProps> = ({textInside,hrefWay,iconClass, className}) => {

  return (
    <li className={`list-item  ${className ? className : ''}`}>
      <Link className="list-item__link" to={hrefWay}>
        {iconClass && <i className={`list-item__icon ${iconClass}`}/>}
        {textInside}
      </Link>
    </li>
  )
};

export default ListItemLink;