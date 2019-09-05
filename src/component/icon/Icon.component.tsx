import React from 'react';
import './Icon.style.scss';

export interface IconProps {
  typeIcon: IconsTypes;
}

export enum IconsTypes {
  Windows = 'fab fa-windows',
  PS = 'fab fa-playstation',
  XBox = 'fab fa-xbox',
  SingIn = 'fas fa-sign-in-alt',
  User = 'fas fa-user',
  Check = 'fas fa-check',
  ArrowTop = 'fas fa-arrow-alt-up'
}

const Icon: React.FC<IconProps> = ({typeIcon}) => {
  return (<i className={`icon ${typeIcon}`}/>)
};

export default Icon;