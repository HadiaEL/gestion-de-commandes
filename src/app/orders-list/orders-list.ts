import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { Order } from '../model/order.model';
import { ORDERS } from '../model/list-orders';
import { OrderItem } from '../order-item/order-item';

@Component({
  selector: 'app-orders-list',
  imports: [NgFor, OrderItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './orders-list.html',
  styleUrl: './orders-list.css',
})
export class OrdersList {
  protected readonly orders = signal<Order[]>(ORDERS);

  trackById(_index: number, order: Order): number {
    return order.id;
  }
}
