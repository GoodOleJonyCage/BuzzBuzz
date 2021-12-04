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

  service : CustomerService;
  customer: Customer;
 

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,private route: ActivatedRoute, custservice: CustomerService) {

    this.service = custservice;

    this.service.customerID.subscribe(custID => {
      http.get<Customer>(baseUrl + 'customer/customerinfo?customerID=' + custID).subscribe(result => {
        this.customer = result;
      }, error => console.error(error));
    });
  }
}
