import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { type NewProductData } from '../../model/product.model';
import { FormsModule } from '@angular/forms';
import { ProductsListService } from '../products-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-product-item',
  imports: [FormsModule],
  templateUrl: './new-product-item.html',
  styleUrls: ['./new-product-item.css'],
})
export class NewProductItem implements OnInit {
  @Output() closeNewProduct = new EventEmitter();
  @Output() submitNewProduct = new EventEmitter<{ newProduct: NewProductData }>();

  entredProductName = '';
  entredProductPrice = 0;
  entredProductDescription = '';

  isEditMode = false;
  editProductId: number | null = null;

  private productsListService = inject(ProductsListService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.editProductId = +id;
      const product = this.productsListService.getProductById(this.editProductId);
      if (product) {
        this.entredProductName = product.name;
        this.entredProductPrice = product.price;
        this.entredProductDescription = product.description;
      }
    }
  }

  onClose() {
    if (this.isEditMode) {
      this.router.navigate(['/products']);
    } else {
      this.closeNewProduct.emit();
    }
  }

  onSubmit() {
    if (this.isEditMode && this.editProductId !== null) {
      this.productsListService.updateProduct({
        productId: this.editProductId,
        name: this.entredProductName,
        price: this.entredProductPrice,
        description: this.entredProductDescription,
      });
      this.router.navigate(['/products']);
    } else {
      this.productsListService.addNewProduct({
        name: this.entredProductName,
        price: this.entredProductPrice,
        description: this.entredProductDescription,
      });
      this.closeNewProduct.emit();
    }
  }
}
