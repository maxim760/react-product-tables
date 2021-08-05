import React from 'react';
import { IProductsDataValue } from '../../types/products';
import styles from './table.module.css';
import { TableHeader } from './TableHeader';
import { TableRowList } from './TableRowList';

type TableProps = IProductsDataValue;

const tableHeaderCells = [
  'id',
  'Название товара',
  'Цена',
  'Количество (input)',
  'Сумма',
];

export const Table: React.FC<TableProps> = ({ id, products, title }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <table className={styles.table}>
        <TableHeader items={tableHeaderCells} />
        
        <tbody>
          <TableRowList products={products} />
        </tbody>
      </table>
    </div>
  );
};
