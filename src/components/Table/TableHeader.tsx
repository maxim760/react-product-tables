import React from 'react';
import styles from './table.module.css';
interface TableHeaderProps {
  items: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ items }) => {
  return (
    <thead>
      <tr>
        {items.map((cellName, i) => (
          <th key={i} className={styles.cell}>{cellName}</th>
        ))}
      </tr>
    </thead>
  );
};
