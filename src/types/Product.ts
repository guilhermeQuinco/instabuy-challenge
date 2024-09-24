interface IPrice {
  id: string;
  title: string;
  internal_code: string;
  price: number;
  promo_price: string | undefined;
  bar_codes: string[];
  qtd_stock: number;
}

export interface IProduct {
  id: string;
  images: string[];
  name: string;
  prices: IPrice[];
  slug: string;
  brand: string;
}

export interface ICollectionItem {
  id: string;
  title: string;
  slug: string;
  items: IProduct[];
}

export interface ICollectionItemsResponse {
  data: {
    collection_items: ICollectionItem[];
  };
}
