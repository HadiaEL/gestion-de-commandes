export interface Order {
  id: number;
  client: string;
  product: string;
  quantity: number;
  total: number;
  status: 'En attente' | 'Livrée' | 'Annulée';
}
