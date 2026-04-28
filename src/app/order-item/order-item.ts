import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-order-item',
  imports: [NgClass, NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <tr>
      <td>{{ order().id }}</td>
      <td>{{ order().client }}</td>
      <td>{{ order().product }}</td>
      <td>{{ order().quantity }}</td>
      <td
        [ngStyle]="{ 'font-weight': order().total >= 200 ? 'bold' : 'normal',
                      'color': order().total >= 200 ? '#2c3e50' : 'inherit' }">
        {{ order().total }} €
      </td>
      <td
        [ngClass]="{ 'status': true,
                     'livree': order().status === 'Livrée',
                     'en-attente': order().status === 'En attente',
                     'annulee': order().status === 'Annulée' }">
        {{ order().status }}
      </td>
    </tr>
  `,
  styleUrl: './order-item.css',
  host: { style: 'display: contents' },
})
export class OrderItem {
  order = input.required<Order>();
}
