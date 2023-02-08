import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitiesModule} from "./cities/cities.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import('./stores/stores.module').then(m => m.StoresModule)
  }, {
    path: '',
    loadChildren: () =>import('./cities/cities.module').then(m => m.CitiesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
