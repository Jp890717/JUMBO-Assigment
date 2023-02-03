import { Component, OnInit } from '@angular/core';
import {StoreService} from "../services/store.service";
import {Store} from '@ngxs/store';
import {AddStores} from "../state/stores.state";
import {StoreList} from "../models/stores";


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  storeList: StoreList[] = [];
  loading: boolean = true;

  constructor(private storeService: StoreService, private store: Store) {

  }




  ngOnInit(): void {
    this.getStores();

  }

  private getStores() {
    this.loading = true;
    this.storeService.getStores().subscribe((res: StoreList[]) => {
      this.store.dispatch(new AddStores(res));
      this.storeList = res;
      this.loading = false
    }, error => {
      this.loading = false;
    })
  }

}
