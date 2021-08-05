import {
  IProductsData,
  IServerProductsData,
  IServerProductData,
} from '../types/products';

export const normalizeProductsData = (
  data: IServerProductsData
): IProductsData => {
  return data.reduce((acc: IProductsData, object: IServerProductData) => {
    const { goods, rid, rname } = object;
    if (!rid) {
      return acc
    }
    return {
      ...acc,
      [rid]: {
        title: rname,
        id: rid,
        products: goods.map(({ gid: id, gname: name, gprice: price }) => ({
          id,
          name,
          price: +price,
        })),
      },
    };
  }, {});
};
