import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { ChangeToBasket, useAppContext } from '../../contexts/AppContext';
import { OnChange } from '../../types';
import { IProduct } from '../../types/products';
import { debounce } from '../../utils/debounce';
import styles from './table.module.css';

type TableRowProps = IProduct;

const numRegex = /([\D]+|^[0]+)/g;

export const TableRow: React.FC<TableRowProps> = ({ id, name, price }) => {
  const [count, setCount] = useState<number | ''>('');
  const { changeProductToBasket, sendsCount } = useAppContext();

  const changeBasketDebounce = useCallback(
    debounce<Parameters<ChangeToBasket>>(changeProductToBasket, 400),
    []
  );
  const onChangeCount: OnChange = (e) => {
    const { value } = e.target;
    const replaced = value.replace(numRegex, '');
    const count = +replaced;
    setCount(replaced === '' ? '' : count);
    changeBasketDebounce({ price, count, id });
  };
  useEffect(() => {
    if (sendsCount > 0) {
      setCount('');
    }
  }, [sendsCount]);

  return (
    <tr>
      <td className={styles.cell}>{id}</td>
      <td className={styles.cell}>{name}</td>
      <td className={styles.cell}>{price}</td>
      <td className={[styles.cell, styles.input].join(' ')}>
        <input type="text" inputMode="numeric" onChange={onChangeCount} value={count} />
      </td>
      <td className={styles.cell}>{((count || 0) * price).toLocaleString()}</td>
    </tr>
  );
};
