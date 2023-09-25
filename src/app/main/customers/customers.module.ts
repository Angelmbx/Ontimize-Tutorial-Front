import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersHomeComponent } from './customers-home/customers-home.component';


@NgModule({
  declarations: [CustomersHomeComponent], //definir aquí el CustomersHomeComponent para que se cargue cuando escribamos main/customers
  imports: [
    CommonModule,
    CustomersRoutingModule,
    OntimizeWebModule
  ]
})
export class CustomersModule { }
