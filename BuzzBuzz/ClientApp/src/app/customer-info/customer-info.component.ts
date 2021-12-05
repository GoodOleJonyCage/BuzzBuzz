import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../Services/customer.service'
import { Customer } from '../Models/Customer.js'

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})

export class CustomerInfoComponent {

  //variables
  service: CustomerService;
  customer: Customer;
  productcount: number;
  http: HttpClient;
  baseUrl: string;
  //variables

  //methods
  public getCustomerInfo() {
    //get customer info
    this.service.customerID.subscribe(custID => {
      this.http.get<Customer>(this.baseUrl + 'customer/customerinfo?customerID=' + custID).subscribe(result => {
        this.customer = result;
      }, error => console.error(error));
    });

  }

  public getProductCount() {
    //get product count
    this.service.customerID.subscribe(custID => {
      this.http.get<[]>(this.baseUrl + 'customer/products?customerID=' + custID).subscribe(result => {
        this.productcount = result.length;
      }, error => console.error(error));
    });

  }
  //methods

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,private route: ActivatedRoute, custservice: CustomerService) {

    this.http = http;
    this.baseUrl = baseUrl;
    this.service = custservice;

    //get customer info
    this.getCustomerInfo();

    //get product count
    this.getProductCount();
    
  }
}
