import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order/order.service';
import { Orders } from '../models/orders';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css'],
})
export class OrdersFormComponent implements OnInit {
  ordersForm: FormGroup = new FormGroup({});
  page: string = 'Add';
  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ordersForm = this.formBuilder.group({
      dishName: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    console.log('this.activatedRoute.snapshot', this.activatedRoute.snapshot);
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    let isEditPage = this.activatedRoute?.snapshot?.routeConfig?.path || '';
    if (id && isEditPage.indexOf('edit') > -1) {
      let savedValue = this.orderService.get(Number(id));
      this.ordersForm.patchValue(savedValue);
      this.page = 'Edit';
    }
  }

  onSubmit(): void {
    if (this.ordersForm.valid) {
      let newOrder: Orders = this.ordersForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (this.page === 'Add') {
        newOrder.id = Date.now();
        this.orderService.add(newOrder);
        this.ordersForm.reset();
        this.router.navigate(['/list']);
      } else if (id) {
        newOrder.id = Number(id);
        this.orderService.update(newOrder);
        this.router.navigate(['/list']);
      }
    }
  }
}
