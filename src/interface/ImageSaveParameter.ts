import {AdaptiveImageProps} from "../component/image-component/AdaptiveImage.component";
import {ImageSizeSet} from "./Image";

export const ImageParameterSet = (isBigImage: boolean, {imageNames, altText}: AdaptiveImageProps): AdaptiveImageProps => {
  const imageNamesSet: ImageSizeSet = !isBigImage ? {
    smartphone: imageNames.smartphone,
    table: imageNames.table
  } : {
    ...imageNames
  };

  return {
    altText: altText,
    imageNames: {...imageNamesSet}
  }
};

export const Warframe: AdaptiveImageProps = {
  altText: 'Warframe',
  imageNames: {
    smartphone: 'warframe__320.jpg',
    table: 'warframe__768.jpg',
    big: 'warframe__1440.jpg',
    desktop: 'warframe__1920.jpg'
  }
};
export const TwoPointHospital: AdaptiveImageProps = {
  altText: 'Two point hospital',
  imageNames: {
    smartphone: 'two-point-hospital__320.jpg',
    table: 'two-point-hospital__768.jpg',
    big: 'two-point-hospital__1440.jpg',
    desktop: 'two-point-hospital__1920.jpg'
  }
};
export const Skyrim: AdaptiveImageProps = {
  altText: 'Skyrim',
  imageNames: {
    smartphone: 'skyrim__320.jpg',
    table: 'skyrim__768.jpg',

    big: 'skyrim__1440.jpg',
    desktop: 'skyrim__1920.jpg'
  }
};
export const Rust: AdaptiveImageProps = {
  altText: 'Rust',
  imageNames: {
    smartphone: 'rust__320.jpg',
    table: 'rust__768.jpg',

    big: 'rust__1440.jpg',
    desktop: 'rust__1920.jpg'
  }
};
export const AoF: AdaptiveImageProps = {
  altText: 'Rust',
  imageNames: {
    smartphone: 'AoF__320.jpg',
    table: 'AoF__768.jpg',
    big: 'AoF__1440.jpg',
    desktop: 'AoF__1920.jpg'
  }
};

export const ImageSet: AdaptiveImageProps[] = [Warframe,TwoPointHospital,Rust,AoF,Skyrim];