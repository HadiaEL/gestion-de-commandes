import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsListService } from '../products-list.service';
import { Router } from '@angular/router';
import { DeleteModale } from '../../shared/delete-modale/delete-modale';

@Component({
  selector: 'app-product-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DeleteModale],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
  host: { style: 'display: contents' },
})
export class ProductItem {
  @Input({required: true }) product!: Product;
  @Output() edit = new EventEmitter<Product>()
  @Output() delete = new EventEmitter<Product>();

  showConfirmDelete = false;

 constructor(private productsListService: ProductsListService, private router: Router) {}
  
  onUpdateProduct(product: Product) {
    this.router.navigate(['/products/edit', product.productId]);
  }

  onDeleteProduct(product: Product) {
    this.showConfirmDelete = true;
  }

  onConfirmDelete() {
    const product = this.product;
    this.productsListService.deleteProduct(product.productId);
    this.delete.emit(product);
    this.showConfirmDelete = false;
  }

  onCancelDelete() {
    this.showConfirmDelete = false;
  }
}
