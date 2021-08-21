export interface IProduct {
  id: string;
  createdAt: string;
  name: string;
  image: string;
  price: string;
  category: string;
}

export type IGetProducts = IProduct[];

export interface IProductTiming {
  productId: string;
  startDate: string;
  endDate: string;
}

export type IGetProductTimings = IProductTiming[];

export interface IHotDeals {
  productId: string;
}

export type IGetHotDeals = IHotDeals[];
