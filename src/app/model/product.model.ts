export interface Product {
  productId: number;
  name: string;
  price: number;
  description: string;
}

export interface NewProductData {
  name: string;
  price: number;
  description: string;
}