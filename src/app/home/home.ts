import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="home">
      <h2>Bienvenue dans l'application de Gestion</h2>
      <p>Choisissez une section pour commencer :</p>

      <div class="cards">
        <a routerLink="/products" class="card card-products">
          <span class="card-icon">🛒</span>
          <h3>Produits</h3>
          <p>Gérer les produits : ajouter, modifier ou supprimer.</p>
        </a>

        <a routerLink="/orders" class="card card-orders">
          <span class="card-icon">📦</span>
          <h3>Commandes</h3>
          <p>Consulter et suivre toutes les commandes.</p>
        </a>

        <a routerLink="/clients" class="card card-clients">
          <span class="card-icon">👥</span>
          <h3>Clients</h3>
          <p>Gérer les clients : ajouter, modifier ou supprimer.</p>
        </a>
      </div>
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {}
