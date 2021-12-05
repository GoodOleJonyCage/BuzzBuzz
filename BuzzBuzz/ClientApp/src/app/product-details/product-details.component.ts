import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../Services/customer.service'
import { ColDef } from 'ag-grid-community';
import { Customer } from '../Models/Customer.js'
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {

  http: HttpClient;
  baseUrl: string;
  min: number;
  max: number;
  service: CustomerService;
  customer: Customer;
  customers: Customer[];

 // public columnDefs: ColDef[] = [
 //   { field: 'make' },
 //   { field: 'model' },
 //   { field: 'price' }
 // ];

 //public rowData = [
 //   { make: 'Toyota', model: 'Celica', price: 35000 },
 //   { make: 'Ford', model: 'Mondeo', price: 32000 },
 //   { make: 'Porsche', model: 'Boxter', price: 72000 }
 // ];

  public MovePrev() {
    if (this.min > 0) {
      this.min -= 5;
      this.max -= 5;
    }
  }

  public MoveNext() {
    if (this.max < this.customers.length) {
      this.min += 5;
      this.max += 5;
    }
  }

  public Delete(productID: number) {
    this.http.get<any>(this.baseUrl + 'customer/deleteproduct?productID=' + productID).subscribe(result => {
      this.LoadProducts(this.service.customerID.value);
    }, error => console.error(error));
  }

  public LoadProducts(custID:number) {

    this.http.get<Customer[]>(this.baseUrl + 'customer/products?customerID=' + custID).subscribe(result => {
      this.customers = result
    }, error => console.error(error));

  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute, custservice: CustomerService) {

    this.min = 0;
    this.max = 5;

    this.service = custservice;

    this.http = http;
    this.baseUrl = baseUrl;

    //subscribe to whenever customerID changes
    this.service.customerID.subscribe(custID => {
      this.LoadProducts(custID);
    });

  }
}
