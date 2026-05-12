import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../model/product.model';
import { PRODUCTS } from '../model/list-products';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-products-list',
  imports: [FormsModule, ProductItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  protected readonly products = signal<Product[]>([...PRODUCTS]);
  protected readonly showForm = signal(false);
  protected readonly editingProduct = signal<Product | null>(null);

  formName = '';
  formPrice = 0;
  formDescription = '';

  openAddForm() {
    this.editingProduct.set(null);
    this.formName = '';
    this.formPrice = 0;
    this.formDescription = '';
    this.showForm.set(true);
  }

  openEditForm(product: Product) {
    this.editingProduct.set(product);
    this.formName = product.name;
    this.formPrice = product.price;
    this.formDescription = product.description;
    this.showForm.set(true);
  }

  saveProduct() {
    if (!this.formName.trim()) return;

    const editing = this.editingProduct();
    if (editing) {
      this.products.update(list =>
        list.map(p =>
          p.id === editing.id
            ? { ...p, name: this.formName.trim(), price: this.formPrice, description: this.formDescription.trim() }
            : p
        )
      );
    } else {
      const maxId = this.products().reduce((max, p) => Math.max(max, p.id), 0);
      const newProduct: Product = {
        id: maxId + 1,
        name: this.formName.trim(),
        price: this.formPrice,
        description: this.formDescription.trim(),
      };
      this.products.update(list => [...list, newProduct]);
    }
    this.showForm.set(false);
  }

  deleteProduct(product: Product) {
    this.products.update(list => list.filter(p => p.id !== product.id));
  }

  cancelEdit() {
    this.showForm.set(false);
  }
}
