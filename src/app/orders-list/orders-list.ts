import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { type Order } from '../model/order.model';
import { ORDERS } from '../model/list-orders';
import { OrderItem } from './order-item/order-item';

@Component({
  selector: 'app-orders-list',
  imports: [OrderItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './orders-list.html',
  styleUrls: ['./orders-list.css'],
})
export class OrdersList {

  get ordersList(): Order[] {
    return ORDERS;
  }

  trackById(_index: number, order: Order): number {
    return order.id;
  }
}
