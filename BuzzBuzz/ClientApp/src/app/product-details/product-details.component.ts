import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../Services/customer.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {

  service: CustomerService;

  constructor(private route: ActivatedRoute, custservice: CustomerService) {

    this.route
      .data
      .subscribe(v => console.log(v));

    this.service = custservice;
  }
}
