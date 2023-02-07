import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {StoreState} from "./stores.state";
import {NgxsStoragePluginModule, StorageOption} from "@ngxs/storage-plugin";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([StoreState]),
    NgxsStoragePluginModule.forRoot({
      key: [StoreState],
      storage: StorageOption.LocalStorage
    }),
  ]
})
export class StateModule { }
