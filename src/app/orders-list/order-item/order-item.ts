import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { type Order } from '../../model/order.model';
import { OrdersListService } from '../orders-list.service';

@Component({
  selector: 'app-order-item',
  imports: [NgClass, NgStyle, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-item.html',
  styleUrl: './order-item.css',
  host: { style: 'display: contents' },
})
export class OrderItem {
  @Input() order!: Order;
  @Input() isGestionnaire = false;
  @Output() statusChanged = new EventEmitter<void>();

  constructor(private ordersListService: OrdersListService) {}

  onStatusChange(newStatus: string) {
    this.ordersListService.updateOrderStatus(
      this.order.orderId,
      newStatus as Order['status']
    );
    this.statusChanged.emit();
  }
}
