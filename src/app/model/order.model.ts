import { Product } from "./product.model";
import { Client } from "./client.model";

export interface Order {
  orderId: number;
  client: Client;
  product: Product;
  quantity: number;
  total: number;
  status: 'En attente' | 'Livrée' | 'Annulée';
}
