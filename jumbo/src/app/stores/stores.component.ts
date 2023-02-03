import { Component, OnInit } from '@angular/core';
import {StoreService} from "../services/store.service";
import {Select, Store} from '@ngxs/store';
import {AddStores, StoreStateModel} from "../state/stores.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {



  constructor(private storeService: StoreService, private store: Store) { }




  ngOnInit(): void {


    this.storeService.getStores().subscribe(res => {
      this.store.dispatch(new AddStores(res))
    })

    this.store.select(state => state.stores).subscribe(stores => {
      console.log(stores);
    });
  }

}
