import React from 'react';
import './TableItem.style.scss';
import Platform, {PlatformProps} from "../platform/Platform.component";
import Cost, {CostProps, CostType} from "../cost/Cost.component";
import Image, {ImageProps} from "../image-component/Image.component";

export interface TableItemProps {
  imageParameter: ImageProps;
  genreList: string[],
  platforms: PlatformProps;
  title: string;
  costParameters: CostProps;
}

const TableItem: React.FC<TableItemProps> = ({imageParameter, genreList, platforms, title, costParameters}) => {
  return (
    <article className="table-item">
      <Image {...imageParameter}/>
      <div className="table-item__info">
        <p className="table-item__title">{title}</p>
        <Platform {...platforms}/>
        <p className="table-item__genre">
          {genreList.map((genre: string) => `${genre} `)}
        </p>
      </div>
      <Cost adaptiveBehavior={CostType.Table} {...costParameters}/>
    </article>
  )
};

export default TableItem;