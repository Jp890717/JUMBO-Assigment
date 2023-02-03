import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoresComponent} from "./stores/stores.component";

const routes: Routes = [
  {
    path: 'stores',
    component: StoresComponent
  },{
    path: '',
    redirectTo: 'stores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
