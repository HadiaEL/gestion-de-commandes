import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Order } from '../model/order.model';
import { ORDERS } from '../model/list-orders';
import { OrderItem } from '../order-item/order-item';

@Component({
  selector: 'app-orders-list',
  imports: [OrderItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="orders">
      <h2>Liste des commandes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          @for (order of orders(); track order.id) {
            <app-order-item [order]="order" />
          }
        </tbody>
      </table>
    </section>
  `,
  styleUrl: './orders-list.css',
})
export class OrdersList {
  protected readonly orders = signal<Order[]>(ORDERS);
}
