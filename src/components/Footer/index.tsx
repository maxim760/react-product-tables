import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { apiProducts } from '../../services/products';
import { IBasketToServer, IProductsToBasket } from '../../types/products';
import styles from './footer.module.css';

const getPricesAndCountProducts = (productBasket: IProductsToBasket) => {
  return Object.values(productBasket).reduce(
    (acc, current) => {
      return {
        price: acc.price + current.price * current.count,
        count: acc.count + current.count,
      };
    },
    { price: 0, count: 0 }
  );
};

const formatProductsToSend = (productBasket: IProductsToBasket) => {
  return Object.keys(productBasket).reduce((acc: IBasketToServer, id) => {
    acc[`product[${id}]`] = productBasket[id].count.toString()
    return acc
  }, {})
}

export const Footer: React.FC = () => {
  const { productBasket, clearProductBasket, incrementSendsCount } = useAppContext();
  const { price, count } = getPricesAndCountProducts(productBasket);
  const onClickSendBasket = async () => {
    const dataToSend = formatProductsToSend(productBasket)
    const formData = new FormData();
    for (let key in dataToSend) {
      formData.append(key, dataToSend[key])
    }
    try {
      const result = await apiProducts.send(formData)
      console.log(result)
      clearProductBasket()
      incrementSendsCount()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <footer className={styles.footer}>
      <p>
        Количество товаров - <strong>{count.toLocaleString()}</strong>
      </p>
      <p>
        Общая цена - <strong>{price.toLocaleString()}</strong>
      </p>
      <button className={styles.button} onClick={onClickSendBasket}>В корзину</button>
    </footer>
  );
};
