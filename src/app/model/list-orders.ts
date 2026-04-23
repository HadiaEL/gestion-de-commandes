import { Order } from './order.model';

export const ORDERS: Order[] = [
  { id: 1, client: 'Alice Dupont',  product: 'Laptop HP',       quantity: 1, total: 899.99,  status: 'Livrée'     },
  { id: 2, client: 'Bob Martin',    product: 'Clavier Logitech', quantity: 2, total: 59.98,   status: 'En attente' },
  { id: 3, client: 'Claire Moreau', product: 'Écran Dell 27"',  quantity: 1, total: 349.00,  status: 'En attente' },
  { id: 4, client: 'David Leroy',   product: 'Souris Razer',     quantity: 3, total: 119.97,  status: 'Annulée'    },
  { id: 5, client: 'Emma Bernard',  product: 'Casque Sony',      quantity: 1, total: 199.99,  status: 'Livrée'     },
];
