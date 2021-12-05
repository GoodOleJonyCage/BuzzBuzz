import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../Services/customer.service'
import { Customer } from '../Models/Customer.js'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  //variables
  service: CustomerService;
  selectedCustomer: Customer;
  customers: Customer[];
  selectedRoute = "/";
  isExpanded = false;
  //variables

  //methods
  reloadCustomer(customerid: number) {
    this.service.NewCustomerID(customerid);
  }
  selectRoute(route:string) {
    this.selectedRoute = route;
  }
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  //methods

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, custservice: CustomerService) {

    this.service = custservice;
    //get customers
    http.get<Customer[]>(baseUrl + 'customer/customers').subscribe(result => {
      this.customers = result;
    }, error => console.error(error));
  }
}

