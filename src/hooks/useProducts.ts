import { useState, useEffect } from "react";
import { apiProducts } from "../services/products";
import { STATUS } from "../types";
import { IProductsData } from "../types/products";
import { normalizeProductsData } from "../utils/normalizeProductsData";
import { useStatuses } from "./useStatuses";

export const useProducts = () => {
  const [products, setProducts] = useState<IProductsData>({});
  const { setStatus, ...restStatus } = useStatuses();
  useEffect(() => {
    (async () => {
      setStatus(STATUS.LOADING);
      try {
        const products = await apiProducts.getAll();
        setProducts(normalizeProductsData(products));
        (window as any).data = products;
        setStatus(STATUS.SUCCESS);
      } catch (error) {
        setStatus(STATUS.ERROR, error.message);
      }
    })();
  }, [setStatus]);
  return {
    products,
    status: {setStatus, ...restStatus}
  }
}