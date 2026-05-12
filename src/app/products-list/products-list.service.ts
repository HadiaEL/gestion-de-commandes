import { Injectable } from '@angular/core';
import { type Product } from '../model/product.model';
import { PRODUCTS } from '../model/list-products';

@Injectable({ providedIn: 'root' })
export class ProductsListService {  

    private productsList = PRODUCTS;

    getProductsList(): Product[] {
        return this.productsList;
    }

    getProductById(id: number): Product | undefined {
        return this.productsList.find(product => product.productId === id);
    }   

    addProduct(product: Product) {
        this.productsList.push(product);
    }

    updateProduct(updatedProduct: Product) {
        this.productsList = this.productsList.map(product =>
            product.productId === updatedProduct.productId ? updatedProduct : product
        );
    }

    deleteProduct(productId: number) {
        this.productsList = this.productsList.filter(product => product.productId !== productId);
    }       

}