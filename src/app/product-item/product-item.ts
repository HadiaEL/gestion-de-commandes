import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <tr>
      <td>{{ product().id }}</td>
      <td>{{ product().name }}</td>
      <td class="price">{{ product().price }} €</td>
      <td>{{ product().description }}</td>
      <td class="actions">
        <button class="btn btn-edit" (click)="edit.emit(product())">✏️ Modifier</button>
        <button class="btn btn-delete" (click)="confirmDelete()">🗑️ Supprimer</button>
      </td>
    </tr>
  `,
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
