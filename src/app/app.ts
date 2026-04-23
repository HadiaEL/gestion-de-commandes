import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppNavbar } from './app-navbar/app-navbar';
import { OrdersList } from './orders-list/orders-list';

@Component({
  selector: 'app-root',
  imports: [AppNavbar, OrdersList],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
