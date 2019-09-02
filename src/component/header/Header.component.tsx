import React from 'react';
import './Header.style.scss';
import BurgerButton from "../burger-button/BurgerButton.component";
import Logo from '../logo/Logo.component';
import {openSideBar} from "../side-bar/SideBar.component";

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {

  return (
    <header className="header">
      <Logo/>
      <BurgerButton
        className="header__dropdown-button"
        handleClick={openSideBar}
      />
    </header>
  )
};

export default Header;