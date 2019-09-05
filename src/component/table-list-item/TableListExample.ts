import {AoF, Rust, Skyrim, TwoPointHospital, Warframe} from "../../interface/ImageSaveParameter";
import {TableItemProps} from "./TableItem.component";
import GenreList from "../../interface/Genre";

const TableListItemExample: TableItemProps[] = [
  {
    idGame: 1,
    title: Warframe.altText,
    genreList: [GenreList[0], GenreList[11]],
    platforms: {
      isWindowsSupport: true
    },
    imageParameter: {
      altText: Warframe.altText,
      imageNames: {
        smartphone: Warframe.imageNames.smartphone
      }
    },
    costParameters: {
      cost: 25,
      sale: 55,
      valuate: '$'
    }
  },
  {
    idGame: 2,
    title: Skyrim.altText,
    genreList: [GenreList[0], GenreList[11], GenreList[21], GenreList[13], GenreList[27], GenreList[27], GenreList[27], GenreList[27], GenreList[27]],
    platforms: {
      isWindowsSupport: true,
      isXBoxSupport: true
    },
    imageParameter: {
      altText: Skyrim.altText,
      imageNames: {
        smartphone: Skyrim.imageNames.smartphone
      }
    },
    costParameters: {
      cost: 15,
      valuate: '$'
    }
  },
  {
    idGame: 3,
    title: AoF.altText,
    genreList: [GenreList[0], GenreList[8], GenreList[24], GenreList[10], GenreList[7]],
    platforms: {
      isPSSupport: true
    },
    imageParameter: {
      altText: AoF.altText,
      imageNames: {
        smartphone: AoF.imageNames.smartphone
      }
    },
    costParameters: {
      cost: 18,
      valuate: '$',
      sale: 75
    }
  },
  {
    idGame: 4,
    title: Rust.altText,
    genreList: [GenreList[5], GenreList[3], GenreList[4], GenreList[9], GenreList[7]],
    platforms: {
      isPSSupport: true
    },
    imageParameter: {
      altText: Rust.altText,
      imageNames: {
        smartphone: Rust.imageNames.smartphone
      }
    },
    costParameters: {
      cost: 8,
      valuate: '$',
    }
  },
  {
    idGame: 5,
    title: TwoPointHospital.altText,
    genreList: [GenreList[4], GenreList[31], GenreList[18], GenreList[9], GenreList[17]],
    platforms: {
      isPSSupport: true,
      isWindowsSupport: true
    },
    imageParameter: {
      altText: TwoPointHospital.altText,
      imageNames: {
        smartphone: TwoPointHospital.imageNames.smartphone
      }
    },
    costParameters: {
      cost: 8,
      valuate: '$',
    }
  },
];

export default TableListItemExample;