import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'products', loadComponent: () => import('./products-list/products-list').then(m => m.ProductsList) },
  { path: 'products/edit/:id', loadComponent: () => import('./products-list/new-product-item/new-product-item').then(m => m.NewProductItem) },
  { path: 'orders', loadComponent: () => import('./orders-list/orders-list').then(m => m.OrdersListComponent) },
  { path: 'clients', loadComponent: () => import('./clients-list/clients-list').then(m => m.ClientsList) },
];
