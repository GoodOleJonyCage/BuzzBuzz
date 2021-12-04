import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  customers: Customer[];
  selectedRoute = "/";
  isExpanded = false;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    http.get<Customer[]>(baseUrl + 'customer/customers').subscribe(result => {
      console.log(result);
      this.customers = result;
    }, error => console.error(error));
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
