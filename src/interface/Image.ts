import {Dimension} from "./Size";
import {ButtonMouseEvent} from "../component/button/Button.component";
import getNotUndefinedString from "./String";

/**
 * Container from image names what use in srcSet Image
 */
export interface ImageSizeSet {
  smartphone?: string;
  table?: string;
  desktop?: string;
  big?: string;
}

/**
 * Image parameter standard
 */
interface ImageParameter {
  //* value from alt parameter
  altText: string;
  //* Get names from images
  imageNames: ImageSizeSet;
  //* If element need additional class name set he here
  className?: string;
}

export interface ImageHover {
  handleMouseEnter(event: ButtonMouseEvent): void;

  handleMouseLeave(event: ButtonMouseEvent): void;
}

/**
 * Additional parameter from image.
 * Adaptive image not need this parameter because they set before in class
 */
export interface AdditionalImageParameter {
  //* Set size from image
  size?: Dimension;
  //* If true use maxWidth, false - width
  isAdaptiveImage?: boolean;
}

/**
 * Load image
 */
const loadImage = (imageName:string) => {
  return require(`../images/${imageName}`);
};


/**
 * Get image and set width when this image have load
 * @param name - image name
 * @param size - width when image load
 */
export const setSizeToImage = (name: string | undefined, size: number): string => {
  //* if name is undefined
  if (!name) return '';
  //* Load image
  const image = loadImage(name);
  return `${image} ${size}w`;
};
/**
 * Create Image srcSet from image Names
 * @param imageNames
 */
export const getSrcSetImage = (imageNames: ImageSizeSet): string =>
  `${setSizeToImage(imageNames.smartphone, 320)}, 
   ${setSizeToImage(imageNames.table, 768)},
   ${setSizeToImage(imageNames.desktop, 1440)},
   ${setSizeToImage(imageNames.big, 1920)}`;

/**
 * Get image from src parameter
 * @param imageNames - parameter names
 */
const srcImage = (imageNames: ImageSizeSet): string => {
  if (imageNames.table)       return getNotUndefinedString(imageNames.table);
  if (imageNames.desktop)     return getNotUndefinedString(imageNames.desktop);
  if (imageNames.big)         return getNotUndefinedString(imageNames.big);
  if (imageNames.smartphone)  return getNotUndefinedString(imageNames.smartphone);
  return '';
};
/**
 * Load image from src
 * @param imageName - use Image names and return relative way to image
 */
export const getSrcImage = (imageName: ImageSizeSet) => loadImage(srcImage(imageName));
export default ImageParameter;

