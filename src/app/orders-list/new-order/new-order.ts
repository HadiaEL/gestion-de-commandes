import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsListService } from '../../products-list/products-list.service';
import { OrdersListService } from '../orders-list.service';
import { AuthService } from '../../auth/auth.service';
import { type Product } from '../../model/product.model';
import { CLIENTS } from '../../model/list-clients';

@Component({
  selector: 'app-new-order',
  imports: [FormsModule],
  templateUrl: './new-order.html',
  styleUrls: ['./new-order.css'],
})
export class NewOrder {
  selectedProductId: number | null = null;
  quantity = 1;

  constructor(
    private productsListService: ProductsListService,
    private ordersListService: OrdersListService,
    private authService: AuthService,
    private router: Router
  ) {}

  get products(): Product[] {
    return this.productsListService.getProductsList();
  }

  get selectedProduct(): Product | undefined {
    if (this.selectedProductId) {
      return this.productsListService.getProductById(this.selectedProductId);
    }
    return undefined;
  }

  get total(): number {
    const product = this.selectedProduct;
    if (product) {
      return product.price * this.quantity;
    }
    return 0;
  }

  onSubmit() {
    const product = this.selectedProduct;
    const clientId = this.authService.getClientId();
    if (!product || !clientId) return;

    const client = CLIENTS.find(c => c.clientId === clientId);
    if (!client) return;

    this.ordersListService.addOrder({
      orderId: this.ordersListService.getNextOrderId(),
      client: client,
      product: product,
      quantity: this.quantity,
      total: this.total,
      status: 'En attente',
    });

    this.router.navigate(['/orders']);
  }

  onCancel() {
    this.router.navigate(['/orders']);
  }
}
