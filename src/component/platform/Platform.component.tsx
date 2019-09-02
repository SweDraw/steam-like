import React from 'react';
import './Platform.style.scss';
import Icon, {IconsTypes} from "../icon/Icon.component";

export interface PlatformProps {
  isWindowsSupport?: boolean;
  isXBoxSupport?: boolean;
  isPSSupport?: boolean;
}

const Platform: React.FC<PlatformProps> = ({isPSSupport,isWindowsSupport,isXBoxSupport}) => {

  return (
    <section className="platform">
      {isWindowsSupport && <Icon typeIcon={IconsTypes.Windows}/>}
      {isPSSupport && <Icon typeIcon={IconsTypes.PS}/>}
      {isXBoxSupport && <Icon typeIcon={IconsTypes.XBox}/>}
    </section>
  )
};

export default Platform;