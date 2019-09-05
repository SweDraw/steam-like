import React from 'react';
import './TableList.style.scss';
import TableItem, {TableItemProps} from "../table-list-item/TableItem.component";

export interface TableListProps {
  tableListParameter: TableItemProps[];
}

const TableList: React.FC<TableListProps> = ({tableListParameter}) => {

  return (
    <section className="table-list">
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