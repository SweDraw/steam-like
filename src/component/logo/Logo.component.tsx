import React from 'react';
import './Logo.style.scss';
import AdaptiveImage from "../image-component/AdaptiveImage.component";
import getNotUndefinedString from "../../interface/String";
import {Link} from "react-router-dom";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({className}) => {

  return (
    <article className="logo">
      <Link to={'/'}>
        <AdaptiveImage
          className={`${getNotUndefinedString(className)} logo__image`}
          altText={'Logo image'}
          imageNames={{
            table: 'header__logo.jpg'
          }}
        />
      </Link>
    </article>
  )
};

export default Logo;