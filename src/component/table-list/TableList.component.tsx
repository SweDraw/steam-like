import React from 'react';
import './TableList.style.scss';
import TableItem, {TableItemProps} from "../table-list-item/TableItem.component";
import getNotUndefinedString from "../../interface/String";

export interface TableListProps {
  tableListParameter: TableItemProps[];
  className?: string;
}

const TableList: React.FC<TableListProps> = ({tableListParameter, className}) => {

  return (
    <section className={`table-list ${getNotUndefinedString(className)}`}>
      {tableListParameter.map(
        (tableItem:TableItemProps, index: number) =>
          <TableItem
            key={index}
            className={'table-list__item'}
            {...tableItem}
          />)
      }
    </section>
  )
};

export default TableList;