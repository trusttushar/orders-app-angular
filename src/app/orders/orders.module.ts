import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from '../orders-list/orders-list.component';
import { OrdersFormComponent } from '../orders-form/orders-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrdersListComponent, OrdersFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class OrdersModule {}
