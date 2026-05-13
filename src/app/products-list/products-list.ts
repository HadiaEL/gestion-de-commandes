import { Component } from '@angular/core';
import { ProductsListService } from './products-list.service';
import { ProductItem } from './product-item/product-item';
import { Input, Output, EventEmitter } from '@angular/core';
import { type Product } from '../model/product.model';
import { NewProductItem } from './new-product-item/new-product-item';

@Component({
  selector: 'app-products-list',
  imports: [ProductItem, NewProductItem],
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.css'],
})
export class ProductsList {

  @Input({ required: true }) product!: Product;

  @Output() updateProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() addNewProduct = new EventEmitter<Product>();

  isAddingProduct = false;

  constructor(private productsListService: ProductsListService) {}

  get products() {
    return this.productsListService.getProductsList();
  }

  onStartAddingProduct() {
    this.isAddingProduct = true;
  }

  onCloseAddingProduct() {
    this.isAddingProduct = false;
    
  }
}
