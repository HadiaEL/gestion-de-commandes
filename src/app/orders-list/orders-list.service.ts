import { Injectable } from '@angular/core';
import { ORDERS } from '../model/list-orders';
import { type Order } from '../model/order.model';

@Injectable({ providedIn: 'root' })
export class OrdersListService {

    private ordersList = ORDERS;
    constructor() {
        const storedOrders = localStorage.getItem('ordersList');
        if (storedOrders) {
            this.ordersList = JSON.parse(storedOrders);
        }
    }

    getOrdersList(): Order[] {
        return this.ordersList;
    }

    getOrderById(orderId: number): Order | undefined {
        return this.ordersList.find(order => order.orderId === orderId);
    }

    getOrdersByClientId(clientId: number): Order[] {
        return this.ordersList.filter(order => order.client.clientId === clientId);
    }

    getOrdersByProductId(productId: number): Order[] {
        return this.ordersList.filter(order => order.product.productId === productId);
    }

    addOrder(order: Order, clientId: number) {
        
        this.ordersList.push({
            ...order,
            client: { clientId } as any
        });
    }  
    
    removeOrdersByProductId(productId: number) {
        this.ordersList = this.ordersList.filter(order => order.product.productId !== productId);
    }

    private saveOrders() {
        localStorage.setItem('ordersList', JSON.stringify(this.ordersList));
    }

}