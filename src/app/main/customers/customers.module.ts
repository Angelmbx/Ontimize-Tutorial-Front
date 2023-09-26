import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersNewComponent } from './customers-new/customers-new.component';


@NgModule({
  declarations: [CustomersHomeComponent, CustomersDetailComponent, CustomersNewComponent], //definir aquí el CustomersHomeComponent para que se cargue cuando escribamos main/customers
  imports: [
    CommonModule,
    CustomersRoutingModule,
    OntimizeWebModule
  ]
})
export class CustomersModule { }
