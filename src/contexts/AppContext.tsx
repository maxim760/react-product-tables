import { createContext, useContext } from 'react';
import { useBasket } from '../hooks/useBasket';
import { useCounter } from '../hooks/useCounter';
import { useProducts } from '../hooks/useProducts';
import { useStatuses } from '../hooks/useStatuses';
import { IProductsData, IProductsToBasket } from '../types/products';

export type ChangeToBasket = (arg: {
  price: number;
  id: string;
  count: number;
}) => void;

type IAppContextData = {
  products: IProductsData;
  getProductsStatus: ReturnType<typeof useStatuses>;
  productBasket: IProductsToBasket;
  changeProductToBasket: ChangeToBasket;
  clearProductBasket: () => void;
  sendsCount: number;
  incrementSendsCount: () => void;
};

const AppContext = createContext({} as IAppContextData);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const { products, status: getProductsStatus } = useProducts();
  const { counter: sendsCount, increment: incrementSendsCount } = useCounter(0);
  const { changeProductToBasket, clearProductBasket, productBasket } =
    useBasket();
  return (
    <AppContext.Provider
      value={{
        products,
        getProductsStatus,
        productBasket,
        changeProductToBasket,
        clearProductBasket,
        sendsCount,
        incrementSendsCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
