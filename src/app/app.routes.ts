import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'products', loadComponent: () => import('./products-list/products-list').then(m => m.ProductsList) },
  { path: 'orders', loadComponent: () => import('./orders-list/orders-list').then(m => m.OrdersListComponent) },
  { path: 'clients', loadComponent: () => import('./clients-list/clients-list').then(m => m.ClientsList) },
];
