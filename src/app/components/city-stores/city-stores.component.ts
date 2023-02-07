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
    this.store.select(StoreState.getCity).subscribe(city => this.cityName = city);

    this.store.select(StoreState.getStores).subscribe((stores:StoreList[]) => {
      this.stores = stores.filter(item => item.city === this.cityName);
    })
  }

  back() {
    let navigationExtras: NavigationExtras = {
      state: {
        cities: true
      }
    };
    this.router.navigate(['/stores'], navigationExtras)
  }

}
