import { Component, OnInit } from '@angular/core';
import { Orders } from '../models/orders';
import { OrderService } from '../order/order.service';
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  orderList: Orders[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    let list = this.orderService.all();
    this.orderList = list;
  }

  remove(id: number): void {
    this.orderService.remove(id);
  }
}
