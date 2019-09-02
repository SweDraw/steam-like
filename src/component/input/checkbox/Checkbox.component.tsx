import React from "react";

import './Checkbox.style.scss';

export interface CheckboxProps {
  text: string;
  name: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({name, className, text}) => {

  return (
    <label>
      <input
        type="checkbox"
        name={name}
        className={`checkbox-input ${className}`}
      />
      {text}
    </label>
  )
};

export default Checkbox;