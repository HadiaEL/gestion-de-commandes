import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../model/product.model';

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

  confirmDelete() {
    if (confirm(`Supprimer le produit "${this.product().name}" ?`)) {
      this.delete.emit(this.product());
    }
  }
}
