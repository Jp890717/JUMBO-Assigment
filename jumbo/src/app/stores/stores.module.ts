import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import {StoresComponent} from "./stores.component";
import {CardComponent} from "../components/card/card.component";
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../components/button/button.component";


@NgModule({
  declarations: [
    StoresComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    FormsModule
  ]
})
export class StoresModule { }
