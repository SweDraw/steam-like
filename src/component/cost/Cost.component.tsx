import React from 'react';
import './Cost.style.scss';
import getNotUndefinedString, {getProvideString} from "../../interface/String";

export enum CostType {
  Table = 'cost--table',
  Hide = 'cost--hide'
}

export interface CostProps {
  //* In rate
  sale?: number;
  //* cost from item
  cost: number;
  //* Valuate from item
  valuate: string;
  //* Set type of adaptive behavior(поведінка)
  adaptiveBehavior?: CostType;
}

const Cost: React.FC<CostProps> = ({cost,sale,valuate,adaptiveBehavior}) => {
  //! class what add if cost have sale
  const isSaleClass: string =  getProvideString(sale,'cost--sale');//`${sale ? 'cost--sale' :''}`;
  //! class what declared behavior element when change window width
  const isAdaptiveClass: string = getNotUndefinedString(adaptiveBehavior);
  return (
    <section className={`cost ${isSaleClass} ${isAdaptiveClass}`}>
      {sale && <article className="cost__sale">{`-${sale}%`}</article>}
      <article className="cost__start">{`${cost}${valuate}`}</article>
      {sale && <article className="cost__with-sale">{`${cost*sale/100}${valuate}`}</article>}
    </section>
  )
};

export default Cost;