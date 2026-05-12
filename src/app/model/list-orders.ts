import { Order } from './order.model';

export const ORDERS: Order[] = [
  {
    orderId: 1,
    client: {
      clientId: 2,
      name: 'Bob Martin',
      email: 'bob.martin@email.com',
      phone: '06 23 45 67 89',
    },
    product: {
      productId: 1,
      name: 'Laptop HP',
      price: 899.99,
      description: 'Ordinateur portable HP 15 pouces',
    },
    quantity: 1,
    total: 899.99,
    status: 'Livrée',
  },
  {
    orderId: 2,
    client: {
      clientId: 1,
      name: 'Alice Dupont',
      email: 'alice.dupont@email.com',
      phone: '06 12 34 56 78',
    },
    product: {
      productId: 1,
      name: 'Laptop HP',
      price: 899.99,
      description: 'Ordinateur portable HP 15 pouces',
    },
    quantity: 2,
    total: 1799.98,
    status: 'En attente',
  },
  {
    orderId: 3,
    client: {
      clientId: 3,
      name: 'Claire Moreau',
      email: 'claire.moreau@email.com',
      phone: '06 34 56 78 90',
    },
    product: {
      productId: 2,
      name: 'Clavier Logitech',
      price: 29.99,
      description: 'Clavier mécanique sans fil',
    },
    quantity: 1,
    total: 29.99,
    status: 'En attente',
  },
  {
    orderId: 4,
    client: {
      clientId: 4,
      name: 'David Leroy',
      email: 'david.leroy@email.com',
      phone: '06 45 67 89 01',
    },
    product: {
      productId: 3,
      name: 'Écran Dell 27"',
      price: 349.0,
      description: 'Moniteur Dell UltraSharp 27 pouces',
    },
    quantity: 3,
    total: 119.97,
    status: 'Annulée',
  },
  {
    orderId: 5,
    client: {
      clientId: 5,
      name: 'Emma Bernard',
      email: 'emma.bernard@email.com',
      phone: '06 56 78 90 12',
    },
    product: {
      productId: 2,
      name: 'Clavier Logitech',
      price: 29.99,
      description: 'Clavier mécanique sans fil',
    },
    quantity: 3,
    total: 89.97,
    status: 'Livrée',
  },
];
