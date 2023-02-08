import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityStoresComponent} from "./city-stores/city-stores.component";

const routes: Routes = [
  {
    path: 'cities',
    component: CityStoresComponent
  },{
    path: '',
    redirectTo: 'cities',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule { }
