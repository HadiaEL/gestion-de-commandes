import { Injectable } from '@angular/core';
import { ORDERS } from '../model/list-orders';
import { type Order } from '../model/order.model';

@Injectable({ providedIn: 'root' })
export class OrdersListService {

    private ordersList = ORDERS;

    getOrdersList(): Order[] {
        return this.ordersList;
    }

    getOrderById(id: string): Order | undefined {
        return this.ordersList.find(order => order.orderId === id);
    }

    getOrdersByClientId(clientId: string): Order[] {
        return this.ordersList.filter(order => order.clientId === clientId);
    }

    getOrdersByProductId(productId: string): Order[] {
        return this.ordersList.filter(order => order.productId === productId);
    }

    addOrder(order: Order, clientId: string) {
        
        this.ordersList.push({
            ...order,
            clientId: clientId
        });
    }   

}