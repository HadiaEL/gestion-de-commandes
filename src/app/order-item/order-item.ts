import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-order-item',
  imports: [NgClass, NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-item.html',
  styleUrl: './order-item.css',
  host: { style: 'display: contents' },
})
export class OrderItem {
  order = input.required<Order>();
}
