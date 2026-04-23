import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-order-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <tr>
      <td>{{ order().id }}</td>
      <td>{{ order().client }}</td>
      <td>{{ order().product }}</td>
      <td>{{ order().quantity }}</td>
      <td>{{ order().total }} €</td>
      <td [class]="'status ' + statusClass()">
        {{ order().status }}
      </td>
    </tr>
  `,
  styleUrl: './order-item.css',
  host: { style: 'display: contents' },
})
export class OrderItem {
  order = input.required<Order>();

  protected statusClass(): string {
    const statusOrder = this.order().status;
    if (statusOrder === 'Livrée') return 'livree';
    if (statusOrder === 'Annulée') return 'annulee';
    return 'en-attente';
  }
}
