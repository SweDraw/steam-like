import React from 'react';
import './Submit.style.scss';

export interface SubmitProps {
  children?: string;
  className?: string;
}

const Submit: React.FC<SubmitProps> = ({children, className}) => {

  return (
    <input
      className={`submit-input ${className}`}
      type="submit"
      value={children}
    />
  )
};

export default Submit;