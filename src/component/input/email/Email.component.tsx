import React from 'react';
import './Email.style.scss';

export interface EmailProps {
  className?: string;
  name: string;
}

const Email: React.FC<EmailProps> = ({className, name}) => {

  return (
    <input
      className={`email-input ${className}`}
      type="email"
      name={name}
      placeholder={'exempleemail@yourmail.com'}
    />
  )
};

export default Email;