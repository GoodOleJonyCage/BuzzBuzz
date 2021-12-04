import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BodyComponent } from './body/body.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerService } from './Services/customer.service'
//import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BodyComponent,
    CustomerInfoComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'customer-info', component: CustomerInfoComponent },
      { path: 'product-details', component: ProductDetailsComponent }, //, data: { some_data: service.serviceData }
    ]),
    // AgGridModule.withComponents([])
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
