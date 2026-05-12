import { Order } from './order.model';

export const ORDERS: Order[] = [
  {
    orderId: '1',
    clientId: '2',
    productId: '1',
    quantity: 1,
    total: 899.99,
    status: 'Livrée',
  },
  {
    orderId: '2',
    clientId: '1',
    productId: '1',
    quantity: 2,
    total: 59.98,
    status: 'En attente',
  },
  {
    orderId: '3',
    clientId: '3',
    productId: '2',
    quantity: 1,
    total: 349.0,
    status: 'En attente',
  },
  {
    orderId: '4',
    clientId: '4',
    productId: '3',
    quantity: 3,
    total: 119.97,
    status: 'Annulée',
  },
  {
    orderId: '5',
    clientId: '5',
    productId: '2',
    quantity: 1,
    total: 199.99,
    status: 'Livrée',
  },
];
