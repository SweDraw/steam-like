import React from 'react';
import './Text.style.scss';
import getNotUndefinedString from "../../../interface/String";
import Text from "./Text.component";

export interface UserNameProps {
  name: string;
  className?: string;
}

const UserName: React.FC<UserNameProps> = ({name,className}) => {

  return (
    <Text
      name={name}
      className={`user-name ${getNotUndefinedString(className)}`}
      pattern={'/^[a-z0-9_-]{3,16}$/'}
    />
  )
};

export default UserName;