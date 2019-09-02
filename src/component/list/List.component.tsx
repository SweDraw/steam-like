import React, {ReactNode} from 'react';
import './List.style.scss';
import ListItem, {ListItemProps} from "../list-item/ListItem.component";
import ListItemButton, {isListItemButton, ListItemButtonProps} from "../list-item/ListItemButton.component";
import ListItemLink, {isListItemLink, ListItemLinkProps} from "../list-item/ListItemLink.component";

export type UniversalListItem = ListItemProps | ListItemButtonProps | ListItemLinkProps;

export interface ListProps {
  className?: string;
  listItems: UniversalListItem[];
}

const List: React.FC<ListProps> = ({className, listItems}) => {
  const CreateItem = (item: UniversalListItem, key: number):ReactNode => {
    if (isListItemLink(item)) {
      return <ListItemLink key={key} {...item}/>
    } else if (isListItemButton(item)) {
      return <ListItemButton key={key} {...item}/>
    } else {
      return <ListItem key={key} {...item}/>
    }

  };

  return (
    <ul className={`list ${className}`}>{
      listItems.map((element: UniversalListItem, index: number): ReactNode => CreateItem(element, index))
    }</ul>
  )
};

export default List;