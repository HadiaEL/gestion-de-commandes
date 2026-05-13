import { Component, Output, EventEmitter, inject } from '@angular/core';
import { type NewProductData } from '../../model/product.model';
import { FormsModule } from '@angular/forms';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-new-product-item',
  imports: [FormsModule],
  templateUrl: './new-product-item.html',
  styleUrls: ['./new-product-item.css'],
})
export class NewProductItem {
  @Output() closeNewProduct = new EventEmitter();
  @Output() submitNewProduct = new EventEmitter<{ newProduct: NewProductData }>();

  entredProductName = '';
  entredProductPrice = 0;
  entredProductDescription = '';

    private productsListService = inject(ProductsListService);

  onClose() {
    this.closeNewProduct.emit();
  }

  onSubmit() {
    this.productsListService.addNewProduct({
      name: this.entredProductName,
      price: this.entredProductPrice,
      description: this.entredProductDescription,
    });
    this.closeNewProduct.emit();
  }   


}
