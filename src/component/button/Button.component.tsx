import React, {MouseEvent as ReactMouseEvent} from 'react';
import './Button.style.scss';
import {getProvideString} from "../../interface/String";

export type ButtonMouseEvent = ReactMouseEvent<HTMLButtonElement,MouseEvent>;

export enum ButtonType {
 NOtBorder = 'not-border'
}

export interface ButtonProps {
  handleClick(event: ButtonMouseEvent):void;
  className?: string;
  buttonType?:ButtonType;
}

const Button: React.FC<ButtonProps> = ({children, className, handleClick,buttonType}) => {

  return (
    <button
      className={`button ${getProvideString(buttonType, `button--${buttonType}`)} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
};

export default Button;