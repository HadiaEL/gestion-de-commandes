import { Routes } from '@angular/router';
import { authGuard, gestionnaireGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home), canActivate: [authGuard] },
  { path: 'products', loadComponent: () => import('./products-list/products-list').then(m => m.ProductsList), canActivate: [authGuard] },
  { path: 'products/edit/:id', loadComponent: () => import('./products-list/new-product-item/new-product-item').then(m => m.NewProductItem), canActivate: [authGuard, gestionnaireGuard] },
  { path: 'orders', loadComponent: () => import('./orders-list/orders-list').then(m => m.OrdersListComponent), canActivate: [authGuard] },
  { path: 'orders/new', loadComponent: () => import('./orders-list/new-order/new-order').then(m => m.NewOrder), canActivate: [authGuard] },
  { path: 'clients', loadComponent: () => import('./clients-list/clients-list').then(m => m.ClientsList), canActivate: [authGuard, gestionnaireGuard] },
];
