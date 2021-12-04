import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CustomerService {

  public customerID = new BehaviorSubject<number>(0);

  public NewCustomerID(value): void {
    this.customerID.next(value);
  }

  constructor() {
    
  }
}
