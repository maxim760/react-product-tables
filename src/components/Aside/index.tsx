import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { RouteNames } from '../../utils/routes';
import styles from './aside.module.css';

export const Aside: React.FC = () => {
  const { products } = useAppContext();
  return (
    <aside className={styles.aside}>
      <ul>
        <li className={[styles.listItem, styles.mainLink].join(" ")}>
          <NavLink to={RouteNames.Home} exact activeClassName={styles.activeLink}>
            Все продукты
          </NavLink>
        </li>
        {Object.keys(products).map((id) => (
          <li key={id} className={styles.listItem}>
            <NavLink
              to={`${RouteNames.Product}${id}`}
              activeClassName={styles.activeLink}
            >
              {products[id].title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
