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

    addOrder(order: Order) {
        this.ordersList.push(order);
        this.saveOrders();
    }

    updateOrderStatus(orderId: number, status: Order['status']) {
        const order = this.ordersList.find(o => o.orderId === orderId);
        if (order) {
            order.status = status;
            this.saveOrders();
        }
    }

    removeOrdersByProductId(productId: number) {
        this.ordersList = this.ordersList.filter(order => order.product.productId !== productId);
        this.saveOrders();
    }

    getNextOrderId(): number {
        return Math.max(...this.ordersList.map(o => o.orderId), 0) + 1;
    }

    private saveOrders() {
        localStorage.setItem('ordersList', JSON.stringify(this.ordersList));
    }

}