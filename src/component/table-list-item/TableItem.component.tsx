import React from 'react';
import './TableItem.style.scss';
import AdaptiveImage, {AdaptiveImageProps} from "../image-component/AdaptiveImage.component";
import Platform, {PlatformProps} from "../platform/Platform.component";

export interface TableItemProps {
  imageParameter: AdaptiveImageProps;
  genreList: string[],
  platforms: PlatformProps;
  title: string;
}

const TableItem: React.FC<TableItemProps> = ({imageParameter,genreList,platforms,title}) => {

  return (
    <article className="table-item">
      <AdaptiveImage {...imageParameter}/>
      <div className="table-item__info">
        <p className="table-item__title">{title}</p>
        <Platform {...platforms}/>
        <p className="table-info__genre">
          {genreList.map((genre: string) => `${genre} `)}
        </p>
      </div>
      
    </article>
  )
};

export default TableItem;