import React from 'react';
import { IProductsDataValue } from '../../types/products';
import { TableRow } from './TableRow';

interface TableRowListProps {
  products: IProductsDataValue['products'];
}

export const TableRowList: React.FC<TableRowListProps> = ({ products }) => {
  return (
    <>
      {products.map(({ id, name, price }) => (
        <TableRow key={id} id={id} name={name} price={price} />
      ))}
    </>
  );
};
