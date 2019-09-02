import React from 'react';
import './BurgerButton.style.scss';
import Button, {ButtonMouseEvent} from "../button/Button.component";

export interface BurgerButtonProps {
  className: string;

  handleClick(event: ButtonMouseEvent): void;

  isChangeButton?: boolean;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({className, handleClick, isChangeButton = false}) => {
  const burgerButtonHandleClick = (event: ButtonMouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const element: HTMLButtonElement = event.target as HTMLButtonElement;
    element.classList.toggle('burger-button__active');
  };

  return (
    <Button
      className={`burger-button ${className}`}
      handleClick={(event) => {
        if (isChangeButton) {
          burgerButtonHandleClick(event);
        }
        handleClick(event);
      }}
    >
      <span/>
    </Button>
  )
};

export default BurgerButton;