import React, {MouseEvent as ReactMouseEvent} from 'react';
import './Button.style.scss';

export type ButtonMouseEvent = ReactMouseEvent<HTMLButtonElement,MouseEvent>;

export interface ButtonProps {
  handleClick(event: ButtonMouseEvent):void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({children, className, handleClick}) => {

  return (
    <button
      className={`button ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
};

export default Button;