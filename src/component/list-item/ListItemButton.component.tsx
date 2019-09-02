import React, {ReactNode} from 'react';
import ListItem, {ListItemProps} from "./ListItem.component";
import Button, {ButtonProps} from '../button/Button.component';
import Icon, {IconsTypes} from "../icon/Icon.component";

export interface ListItemButtonProps extends ListItemProps, ButtonProps{
  icon?: IconsTypes;
  children?: ReactNode
}

export const isListItemButton = (element: any): element is ListItemButtonProps => {
  return 'handleClick' in element && 'iconClass' in element;
};

const ListItemButton: React.FC<ListItemButtonProps> = ({children,handleClick,icon,className}) => {

  return (
    <ListItem className={className}>
      <Button handleClick={handleClick} className={'list-item__button'}>
        {icon && <Icon typeIcon={icon}/>}
        {children}
      </Button>
    </ListItem>
  )
};

export default ListItemButton;