import { Injectable } from '@angular/core';
import { Orders } from '../models/orders';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Orders[] = [];

  constructor() {
    let savedOrders = localStorage.getItem('orders');
    this.orders = savedOrders ? JSON.parse(savedOrders) : [];
  }

  add(data: Orders): void {
    this.orders.push(data);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  update(data: Orders): void {
    let index = this.orders.findIndex((val) => val.id === data.id);
    this.orders[index] = data;
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  get(id: number): Orders {
    let index = this.orders.findIndex((val) => val.id === id);
    return this.orders[index];
  }

  remove(id: number): void {
    let index = this.orders.findIndex((val) => val.id === id);
    this.orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  all(): Orders[] {
    return this.orders;
  }
}
