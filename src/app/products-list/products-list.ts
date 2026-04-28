import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../model/product.model';
import { PRODUCTS } from '../model/list-products';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-products-list',
  imports: [FormsModule, ProductItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="products">
      <div class="header">
        <h2>Liste des produits</h2>
        <button class="btn btn-add" (click)="openAddForm()">+ Ajouter un produit</button>
      </div>

      @if (showForm()) {
        <div class="form-overlay" (click)="cancelEdit()">
          <form class="product-form" (ngSubmit)="saveProduct()" (click)="$event.stopPropagation()">
            <h3>{{ editingProduct() ? 'Modifier le produit' : 'Ajouter un produit' }}</h3>

            <label>Nom
              <input type="text" [(ngModel)]="formName" name="name" required />
            </label>

            <label>Prix (€)
              <input type="number" [(ngModel)]="formPrice" name="price" required min="0" step="0.01" />
            </label>

            <label>Description
              <textarea [(ngModel)]="formDescription" name="description" rows="3"></textarea>
            </label>

            <div class="form-actions">
              <button type="submit" class="btn btn-save">Enregistrer</button>
              <button type="button" class="btn btn-cancel" (click)="cancelEdit()">Annuler</button>
            </div>
          </form>
        </div>
      }

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (product of products(); track product.id) {
            <app-product-item
              [product]="product"
              (edit)="openEditForm($event)"
              (delete)="deleteProduct($event)"
            />
          }
        </tbody>
      </table>
    </section>
  `,
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
