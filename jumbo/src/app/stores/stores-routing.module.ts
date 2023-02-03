import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoresComponent} from "./stores.component";

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
