import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StoreService} from "../services/store.service";
import {AddStores} from "../state/stores.state";
import {Cities, StoreList} from "../models/stores";
import {debounceTime, Subject} from "rxjs";
import {Store} from "@ngxs/store";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  storeList: StoreList[] = [];
  cityList: Cities[] = [];
  loading: boolean = true;
  showStores: boolean = true;
  showCities: boolean = false;
  filteredStores: StoreList[] = [];
  filteredCities: Cities[] = [];
  speed = 2;


  private inputSubject = new Subject<string>();
  public searchString = '';

  constructor(private storeService: StoreService, private store: Store, private location: Location) {
  }

  ngOnInit(): void {
    this.getStores();
    // Filter stores and Cities on search string
    this.inputSubject.pipe(debounceTime(200)).subscribe(query => {
      this.searchString = query;
    });

    //Getting navigation state from city-stores to set showCities to true
    const navigation: any = this.location.getState();
    if (navigation.cities !== undefined) {
      this.showCities = navigation.cities;
      this.showStores = false;
    }
  }


  private getStores() {
    this.loading = true;
    this.storeService.getStores().subscribe((res:StoreList[]) => {
      // Saving Store list to the state
      this.store.dispatch(new AddStores(res));
      this.storeList = res;

      // Removing duplicates from cityList and filtering out stores where city in empty string
      this.cityList = [...new Set(this.storeList.map(city => city.city).filter(city => city !== ''))].map(city => ({ city }));
      this.loading = false
    }, error => {
      this.loading = false;
    })
  }

  onInput(event: any) {
    const query = event.target.value;
    this.inputSubject.next(query);
  }

}
