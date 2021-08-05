import { useState, useCallback } from "react";
import { ChangeToBasket } from "../contexts/AppContext";
import { IProductsToBasket } from "../types/products";

export const useBasket = () => {
  const [productBasket, setProductBasket] = useState<IProductsToBasket>({});
  const changeProductToBasket: ChangeToBasket = useCallback(({ price, id, count }) => {
    setProductBasket((prev) => {
      const { [id]: updatedKey, ...rest } = prev
      if (count === 0) {
        return rest
      }
      return {
        ...rest,
        [id]: {count, price}
      }
    });
  }, [])
  const clearProductBasket = useCallback(() => {
    setProductBasket({})
  }, [])
  return {productBasket, clearProductBasket, changeProductToBasket}
}