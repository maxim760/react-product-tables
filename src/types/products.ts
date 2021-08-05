import { IAnyObject } from '.';

type IServerProduct = {
  DD_max_value: number;
  DD_min_value: number;
  DiametrCyl_value: string;
  DiametrStock_value: string;
  OCT_value: string;
  Priority_value: number;
  TY12_value: string;
  Thickness_value: string;
  Tolerance_value: string;
  Width_value: string;
  br_drawing_value: boolean;
  can_be_ordered_value: boolean;
  catalog_description_value: string;
  d_max_value: number;
  d_min_value: number;
  drawing_value: IAnyObject;
  gallery_1_value: IAnyObject;
  gartikul: string;
  gcurrency: string;
  ged: string;
  ggood_code: string;
  ggroup_id: string;
  gid: string;
  glast_change_date: string;
  gname: string;
  gnever_visible: string;
  gnote: string;
  gnote_file: string;
  gpict: string;
  gprice: string;
  gprice_cat_id: string;
  gquantity: string;
  gquantity_reserved: string;
  gstate: string;
  gstore: string;
  gvendor: string;
  gvendor_id: string;
  gweight: string;
  h_max_value: number;
  h_min_value: number;
  material_acetal_r_value: boolean;
  material_poliuritan_gu_r_value: boolean;
  material_poliuritan_gu_t_value: boolean;
  material_poliuritan_gu_value: boolean;
  material_rezina_p_value: boolean;
  material_rezina_value: boolean;
  order_example_p_value: string;
  order_example_paket_value: string;
  order_example_value: string;
  parameters_material_value: string;
  parameters_mounting_value: string;
  parameters_one_table_value: string;
  picture_url: string;
  profile3d_2_value: string;
  profile_from_pdf_value: IAnyObject;
  seo_part_1_value: string;
  seo_part_2_value: string;
  small_picture_value: IAnyObject;
};

export type IServerProductData = {
  description: string;
  goods: IServerProduct[];
  icon: string;
  resource_id: string;
  rid: string;
  rlevel: string;
  rname: string;
  rparent: string;
  rposition: string;
  rtime: string;
  rtitle: string;
  urlalias: string;
};

export type IServerProductsData = IServerProductData[];

export type IProduct = {
  id: string;
  name: string;
  price: number;
};

export type IProductsDataValue = {
  title: string;
  products: IProduct[];
  id: string;
};
export type IProductsData = {
  [key: string]: IProductsDataValue
};

export type IProductsToBasket = {
  [key: string]: {
    price: number;
    count: number;
  };
};
export type IBasketToServer = {
  [key: string]: string
}
export type IBasketFromServer = {
  success: true;
  data: {
    product: {
      [key: string]: string;
    };
  };
};
