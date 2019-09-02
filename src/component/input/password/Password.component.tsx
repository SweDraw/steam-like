import React from 'react';
import './Password.style.scss';

export interface PasswordProps {
  className?: string;
  name: string;
}

const Password: React.FC<PasswordProps> = ({className,name}) => {

  return (
    <input
      type="password"
      placeholder={'password'}
      className={`password-input ${className}`}
      name={name}
      pattern={'/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,20}$/'}
    />
  )
};

export default Password;