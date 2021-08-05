import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Aside } from '../components/Aside';
import { Footer } from '../components/Footer';
import { Loader } from '../components/Loader';
import { TableList } from '../components/Table/TableList';
import { useAppContext } from '../contexts/AppContext';
import { IProductsData } from '../types/products';
import styles from './main.module.css';

export const MainPage: React.FC = () => {
  const { getProductsStatus: status, products } = useAppContext();
  const [filteredProducts, setFilteredProducts] =
    useState<null | IProductsData>(products);
  const { id: productId } = useParams<{ id: string }>();

  useEffect(() => {
    if (!products) {
      return;
    }
    if (!productId) {
      setFilteredProducts(products);
      return;
    }
    if (!products[productId]) {
      setFilteredProducts(null);
      return;
    }
    setFilteredProducts({ [productId]: products[productId] });
  }, [productId, products]);

  if (status.isLoading) {
    return (
      <div className={styles.center}>
        <Loader text="Загрузка..." />
      </div>
    );
  }
  if (status.isError) {
    return <p className={styles.center}>Ошибка: {status.statusMessage}</p>;
  }
  return (
    <div className={styles.app}>
      <Aside />
      <main className={styles.main}>
        {filteredProducts === null ? (
          <p className={styles.addressError}>По данному адресу продуктов не найдено :{`(`}</p>
        ) : (
          <TableList productsData={filteredProducts} />
        )}
      </main>

      <Footer />
    </div>
  );
};
