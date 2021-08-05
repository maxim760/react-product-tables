import React from 'react';
import { IProductsData } from '../../types/products';
import { Table } from './Table';

interface TableListProps {
  productsData: IProductsData
}

export const TableList: React.FC<TableListProps> = ({ productsData }) => {
  return (
    <>
      {Object.keys(productsData).map((key) => {
        const { id, products, title } = productsData[key];
        return <Table key={id} id={id} products={products} title={title}/>;
      })}
    </>
  );
};
