import getNotUndefinedString from "../../../interface/String";
import {AoF, Rust, Skyrim, TwoPointHospital, Warframe} from "../../../interface/ImageSaveParameter";
import {MainSlideProps} from "./MainSlide.component";

const MainSlideExample: MainSlideProps[] = [
  {
    idItem: 1,
    title: getNotUndefinedString(Warframe.className),
    text: 'Already sale',
    imageParameter: {...Warframe},
    costPlatformParameter: {
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
  {
    idItem: 2,
    title: getNotUndefinedString(Rust.className),
    text: 'Already sale',
    imageParameter: {...Rust},
    costPlatformParameter:{
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
  {
    idItem: 3,
    title: getNotUndefinedString(AoF.className),
    text: 'Already sale',
    imageParameter: {...AoF},
    costPlatformParameter:{
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
  {
    idItem: 4,
    title: getNotUndefinedString(Skyrim.className),
    text: 'Already sale',
    imageParameter: {...Skyrim},
    costPlatformParameter:{
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
  {
    idItem: 5,
    title: getNotUndefinedString(TwoPointHospital.className),
    text: 'Already sale',
    imageParameter: {...TwoPointHospital},
    costPlatformParameter:{
      costParameter: {
        cost: 35,
        sale: 25,
        valuate: '$'
      },
      platformParameter: {
        isWindowsSupport: true
      }
    }
  },
];

export default MainSlideExample;