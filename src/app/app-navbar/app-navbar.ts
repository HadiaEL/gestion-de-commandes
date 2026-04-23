import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="navbar">
      <h1>📦 Gestion de Commandes</h1>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Commandes</a></li>
      </ul>
    </nav>
  `,
  styleUrl: './app-navbar.css',
})
export class AppNavbar {}
