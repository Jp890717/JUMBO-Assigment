import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {NgxsStoragePluginModule, StorageOption} from '@ngxs/storage-plugin';
import {StoreState} from "./state/stores.state";
import { CityStoresComponent } from './components/city-stores/city-stores.component';
import {StoresModule} from "./stores/stores.module";

@NgModule({
  declarations: [
    AppComponent,
    CityStoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([StoreState]),
    NgxsStoragePluginModule.forRoot({
      key: [StoreState],
      storage: StorageOption.LocalStorage
    }),
    StoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
