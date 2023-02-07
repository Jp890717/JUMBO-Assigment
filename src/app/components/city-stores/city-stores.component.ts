import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {StoreState} from "../../state/stores.state";
import {StoreList} from "../../models/stores";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-city-stores',
  templateUrl: './city-stores.component.html',
  styleUrls: ['./city-stores.component.scss']
})
export class CityStoresComponent implements OnInit {

  cityName: string = '';
  stores: StoreList[] =[];

  constructor(private store:Store, private router: Router) {

  }

  ngOnInit(): void {
    this.getCityName()
    this.getStores();
  }

  getCityName(){
    const city = this.store.selectSnapshot(StoreState.getCity);
    if (city !== undefined) this.cityName = city
  }

  getStores(){
    const stores = this.store.selectSnapshot(StoreState.getStores);
    if (stores !== undefined) this.stores = stores.filter(item => item.city === this.cityName);
  }

  back() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        showCities: true,
        showStores: false
      }
    };
    this.router.navigate(['/stores'], navigationExtras)
  }

}
