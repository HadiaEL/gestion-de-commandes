import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="navbar">
      <h1>📦 Gestion de Commandes</h1>
      <ul>
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Accueil</a></li>
        <li><a routerLink="/products" routerLinkActive="active">Produits</a></li>
        <li><a routerLink="/orders" routerLinkActive="active">Commandes</a></li>
        <li><a routerLink="/clients" routerLinkActive="active">Clients</a></li>
      </ul>
    </nav>
  `,
  styleUrl: './app-navbar.css',
})
export class AppNavbar {}
