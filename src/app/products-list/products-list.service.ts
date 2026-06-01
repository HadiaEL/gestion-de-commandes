import { Injectable } from '@angular/core';
import { NewProductData, type Product } from '../model/product.model';
import { PRODUCTS } from '../model/list-products';

@Injectable({ providedIn: 'root' })
export class ProductsListService {  

    private productsList = PRODUCTS;

    constructor() {
        const storedProducts = localStorage.getItem('productsList');
        if (storedProducts) {
            this.productsList = JSON.parse(storedProducts);
        }
    }

    getProductsList(): Product[] {
        return this.productsList;
    }

    getProductById(id: number): Product | undefined {
        return this.productsList.find(product => product.productId === id);
    }   

    addNewProduct(product: NewProductData) {
        this.productsList.push({
            productId: Math.max(...this.productsList.map(p => p.productId)) + 1,
            name: product.name,
            price: product.price,
            description: product.description
        });
    }

    updateProduct(updatedProduct: Product) {
        this.productsList = this.productsList.map(product =>
            product.productId === updatedProduct.productId ? updatedProduct : product
        );
        this.saveProduct();
    }

    deleteProduct(productId: number) {
        this.productsList = this.productsList.filter(product => product.productId !== productId);
        this.saveProduct();

    }   

    private saveProduct () {
        localStorage.setItem('productsList', JSON.stringify(this.productsList));
    }

}