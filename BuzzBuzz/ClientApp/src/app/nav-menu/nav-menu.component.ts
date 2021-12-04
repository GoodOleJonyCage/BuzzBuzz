import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../Services/customer.service'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  service: CustomerService;
  selectedCustomer: Customer;
  customers: Customer[];
  selectedRoute = "/";
  isExpanded = false;
   

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, custservice:CustomerService) {

    http.get<Customer[]>(baseUrl + 'customer/customers').subscribe(result => {
      //console.log(result);
      this.customers = result;
    }, error => console.error(error));

    this.service = custservice;
  }

  reloadCustomer(c:Customer) {
    console.log(c);
    console.log(this.selectedCustomer);
    this.service.customerID = 0;
    this.service.customerName = c.name;
    //this.selectedCustomer = c;
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
}


interface Customer {
  id : number;
  name: string;
}
