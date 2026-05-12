export interface Order {
  orderId: string;
  clientId: string;
  productId: string;
  quantity: number;
  total: number;
  status: 'En attente' | 'Livrée' | 'Annulée';
}
