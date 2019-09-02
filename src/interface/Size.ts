export type Size = string | number | undefined;
export type AdaptiveWidth = {width: Size} | {maxWidth: Size};
export type AdaptiveHeight = {height: Size} | {maxHeight: Size};

export interface Dimension {
  width?: Size;
  height?: Size;
}

export const getSize = ({width,height}:Dimension = {}, isAdaptiveImage:boolean = false): Object => {
  const widthSize:AdaptiveWidth = isAdaptiveImage ? {width: width} : {maxWidth: width};
  const heightSize: AdaptiveHeight = isAdaptiveImage ? {height: height} : {maxHeight: height};
  return Object.assign({},widthSize,heightSize);
};