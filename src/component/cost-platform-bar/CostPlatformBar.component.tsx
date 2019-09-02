import React from 'react';
import './InfoBar.style.scss';
import Cost, {CostProps} from "../../cost/Cost.component";
import Platform, {PlatformProps} from "../../platform/Platform.component";

export interface MainInfoBarProps {
  costParameter: CostProps;
  platformParameter: PlatformProps;
}

export interface InfoBarProps extends MainInfoBarProps{

}

const InfoBar: React.FC<InfoBarProps> = ({costParameter,platformParameter}) => {
  return (
    <section className="info-bar">
      <Cost {...costParameter}/>
      <Platform {...platformParameter}/>
    </section>
  )
};

export default InfoBar;