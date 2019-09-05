import {AoF, Rust, Skyrim, TwoPointHospital, Warframe} from "../../../interface/ImageSaveParameter";
import {CostPlatformExample} from "../../cost-platform-bar/CostPlatformBar.component";
import {SmallSlideProps} from "../../slide-component/small-slide/SmallSlide.component";

const SmallSlideExample: SmallSlideProps[] = [
  {
    imageParameter: Warframe,
    costPlatformParameter: CostPlatformExample[0]
  },
  {
    imageParameter: Rust,
    costPlatformParameter: CostPlatformExample[1]
  },
  {
    costPlatformParameter: CostPlatformExample[2],
    imageParameter: AoF
  },
  {
    imageParameter: Skyrim,
    costPlatformParameter: CostPlatformExample[0]
  },
  {
    costPlatformParameter: CostPlatformExample[1],
    imageParameter: TwoPointHospital
  }
];

export default SmallSlideExample;