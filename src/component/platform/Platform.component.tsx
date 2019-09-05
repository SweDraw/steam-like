import React from 'react';
import './Platform.style.scss';
import Icon, {IconsTypes} from "../icon/Icon.component";
import {Link} from "react-router-dom";

export interface PlatformProps {
  isWindowsSupport?: boolean;
  isXBoxSupport?: boolean;
  isPSSupport?: boolean;
}

const Platform: React.FC<PlatformProps> = ({isPSSupport,isWindowsSupport,isXBoxSupport}) => {

  return (
    <section className="platform">
      {isWindowsSupport && <Link to={'/windows'}><Icon typeIcon={IconsTypes.Windows}/></Link>}
      {isPSSupport && <Link to={'/play'}><Icon typeIcon={IconsTypes.PS}/></Link>}
      {isXBoxSupport && <Link to={'/xbox'}><Icon typeIcon={IconsTypes.XBox}/></Link>}
    </section>
  )
};

export default Platform;