import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StoreService} from "../services/store.service";
import {AddStores} from "../state/stores.state";
import {Cities, StoreList} from "../models/stores";
import {debounceTime, Subject} from "rxjs";
import {Store} from "@ngxs/store";


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  storeList: StoreList[] = [];
  loading: boolean = true;
  showStores: boolean = false;
  showCities: boolean = false;
  filteredStores: StoreList[] = [];
  filteredCities: Cities[] = [];
  cityList: Cities[] = []

  private inputSubject = new Subject<string>();
  public searchString = '';

  constructor(private storeService: StoreService, private store: Store) {
  }

  ngOnInit(): void {
    this.getStores();
    // Filter stores and Cities on searchString
    this.inputSubject.pipe(debounceTime(500)).subscribe(query => {
      this.searchString = query;

      this.filteredStores = this.storeList.filter(item => item.addressName.toLowerCase().includes(this.searchString.toLowerCase())
      || item.city.toLowerCase().includes(this.searchString.toLowerCase()));

      // Filter cities and removing duplicates
      this.filteredCities = [...new Set(this.storeList.map(city => city.city).filter(item => item.toLowerCase().includes(this.searchString.toLowerCase())))].map(city => ({city}));
    });
  }


  private getStores() {
    this.loading = true;
    this.storeService.getStores().subscribe((res:StoreList[]) => {
      // Saving Store list to the state
      this.store.dispatch(new AddStores(res));
      this.storeList = res;
      // Removing duplicates from cityList
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
