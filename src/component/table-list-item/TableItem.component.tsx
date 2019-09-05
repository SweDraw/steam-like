import React from 'react';
import './TableItem.style.scss';
import Platform, {PlatformProps} from "../platform/Platform.component";
import Cost, {CostProps, CostType} from "../cost/Cost.component";
import Image, {ImageProps} from "../image-component/Image.component";
import {Link} from "react-router-dom";

export interface TableItemProps {
  idGame: number;
  imageParameter: ImageProps;
  genreList: string[],
  platforms: PlatformProps;
  title: string;
  costParameters: CostProps;
}

const TableItem: React.FC<TableItemProps> = ({imageParameter, idGame, genreList, platforms, title, costParameters}) => {
  return (
    <Link to={`/game/${idGame}`}>
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
    </Link>
  )
};

export default TableItem;