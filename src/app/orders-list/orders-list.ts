import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { type Order } from '../model/order.model';
import { OrderItem } from './order-item/order-item';
import { OrdersListService } from './orders-list.service';

@Component({
  selector: 'app-orders-list',
  imports: [OrderItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './orders-list.html',
  styleUrls: ['./orders-list.css'],
})
export class OrdersListComponent {

  @Input({ required: true }) clientId!: string;
  @Input ({required: true}) productId!: string;


  constructor(private ordersListService: OrdersListService) {}

  get ordersList(): Order[] {
    return this.ordersListService.getOrdersList();
  }

  get selectedOrdersListByClientId(): Order[] {
    return this.ordersListService.getOrdersByClientId(Number(this.clientId));
  }

  get selectedOrdersListByProductId(): Order[] {
    return this.ordersListService.getOrdersByProductId(Number(this.productId));
  }

}
