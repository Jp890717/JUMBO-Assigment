import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoresComponent} from "./stores.component";
import {CardComponent} from "../components/card/card.component";
import {CityStoresComponent} from "../components/city-stores/city-stores.component";

const routes: Routes = [
  {
    path: 'stores',
    component: StoresComponent
  },{
    path: 'city-stores',
    component: CityStoresComponent
  },{
    path: '',
    redirectTo: 'stores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
