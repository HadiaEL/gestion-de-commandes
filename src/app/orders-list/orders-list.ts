import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { type Order } from '../model/order.model';
import { OrderItem } from './order-item/order-item';
import { OrdersListService } from './orders-list.service';
import { AuthService } from '../auth/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  imports: [OrderItem, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './orders-list.html',
  styleUrls: ['./orders-list.css'],
})
export class OrdersListComponent {

  @Input({ required: true }) clientId!: string;
  @Input ({required: true}) productId!: string;


  constructor(
    private ordersListService: OrdersListService,
    protected authService: AuthService
  ) {}

  get ordersList(): Order[] {
    if (this.authService.isGestionnaire()) {
      return this.ordersListService.getOrdersList();
    }
    const clientId = this.authService.getClientId();
    if (clientId) {
      return this.ordersListService.getOrdersByClientId(clientId);
    }
    return [];
  }

  get selectedOrdersListByClientId(): Order[] {
    return this.ordersListService.getOrdersByClientId(Number(this.clientId));
  }

  get selectedOrdersListByProductId(): Order[] {
    return this.ordersListService.getOrdersByProductId(Number(this.productId));
  }

  onStatusChanged() {
    // Trigger re-render after status change
  }

}
