import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { type Order } from '../../model/order.model';

@Component({
  selector: 'app-order-item',
  imports: [NgClass, NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-item.html',
  styleUrl: './order-item.css',
  host: { style: 'display: contents' },
})
export class OrderItem {
  @Input() order!: Order;

  
}
