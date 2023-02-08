import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesRoutingModule } from './cities-routing.module';
import {CityStoresComponent} from "./city-stores/city-stores.component";
import {StoresModule} from "../stores/stores.module";



@NgModule({
  declarations: [
    CityStoresComponent,
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    StoresModule
  ]
})
export class CitiesModule { }
