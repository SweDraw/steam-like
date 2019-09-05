import React from 'react';
import './CostPlatformBar.style.scss';
import Cost, {CostProps, CostType} from "../cost/Cost.component";
import Platform, {PlatformProps} from "../platform/Platform.component";

export interface CostPlatformBarProps{
  costParameter: CostProps;
  platformParameter: PlatformProps;
}

export const CostPlatformExample: CostPlatformBarProps[] = [
  {
    costParameter: {
      valuate: '$',
      sale: 15,
      cost: 3
    },
    platformParameter: {
      isWindowsSupport: true
    }
  },
  {
    costParameter:{
      cost: 50,
      valuate: 'Є'
    },
    platformParameter: {
      isPSSupport: true,
      isXBoxSupport: true
    }
  },
  {
    platformParameter: {
      isPSSupport: true
    }, costParameter:{
      cost: 8,
      valuate: 'грн',
      sale: 85
    }
  }
];

const CostPlatformBar: React.FC<CostPlatformBarProps> = ({costParameter,platformParameter}) => {
  return (
    <section className="cost-platform-bar">
      <Cost adaptiveBehavior={CostType.Hide} {...costParameter}/>
      <Platform {...platformParameter}/>
    </section>
  )
};

export default CostPlatformBar;