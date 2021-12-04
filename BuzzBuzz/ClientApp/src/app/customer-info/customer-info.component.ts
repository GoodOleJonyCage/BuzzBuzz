import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../Services/customer.service'

@Component({
    selector: 'app-customer-info',
    templateUrl: './customer-info.component.html',
    styleUrls: ['./customer-info.component.css']
})

export class CustomerInfoComponent {
  
  service: CustomerService;

  constructor(private route: ActivatedRoute, custservice: CustomerService) {

    this.route
      .data
      .subscribe(v => console.log(v));

    this.service = custservice;
  }
}
