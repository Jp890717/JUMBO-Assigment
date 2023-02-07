import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import {StoresComponent} from "./stores.component";
import {CardComponent} from "../components/card/card.component";
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../components/button/button.component";
import {FilterStorePipe} from "../pipes/filter-store.pipe";
import {FilterCitiesPipe} from "../pipes/filter-cities.pipe";

@NgModule({
  declarations: [
    StoresComponent,
    CardComponent,
    ButtonComponent,
    FilterStorePipe,
    FilterCitiesPipe
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    FormsModule
  ]
})
export class StoresModule { }
