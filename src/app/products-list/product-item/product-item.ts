import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsListService } from '../products-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
  host: { style: 'display: contents' },
})
export class ProductItem {
  product = input.required<Product>();
  edit = output<Product>();
  delete = output<Product>();

 constructor(private productsListService: ProductsListService, private router: Router) {}
  
  onUpdateProduct(product: Product) {
    this.router.navigate(['/products/edit', product.productId]);
  }

  onDeleteProduct(product: Product) {
    this.productsListService.deleteProduct(product.productId); 
    this.delete.emit(product);
  }
}
