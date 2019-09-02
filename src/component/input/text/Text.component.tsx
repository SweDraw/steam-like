import React from 'react';
import './Text.style.scss';
import getNotUndefinedString from "../../../interface/String";

export interface TextProps {
  name: string;
  className?: string;
  pattern?: string;
}

const Text: React.FC<TextProps> = ({className,name,pattern}) => {
  return (
    <input
      type="text"
      name={name}
      className={`input-text ${getNotUndefinedString(className)}`}
      pattern={getNotUndefinedString(pattern)}
    />
  )
};

export default Text;