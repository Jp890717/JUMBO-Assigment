import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {StoreState} from "../../state/stores.state";
import {StoreList} from "../../models/stores";

@Component({
  selector: 'app-city-stores',
  templateUrl: './city-stores.component.html',
  styleUrls: ['./city-stores.component.scss']
})
export class CityStoresComponent implements OnInit {

  cityName: string = '';
  stores: StoreList[] =[];

  constructor(private store:Store) {
    this.store.select(StoreState.getCity).subscribe(city => this.cityName = city);
  }

  ngOnInit(): void {
    this.store.select(StoreState.getStores).subscribe((stores:StoreList[]) => {
      this.stores = stores.filter(item => item.city === this.cityName);
    })
  }

}
