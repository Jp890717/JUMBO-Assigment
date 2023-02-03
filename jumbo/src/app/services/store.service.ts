import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {StoreList} from "../models/stores";
import {Store} from "@ngxs/store";
import {AddStores} from "../state/stores.state";


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient, private store: Store) {}

  getStores(): Observable<StoreList[]> {
    return this.http.get<StoreList[]>('https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e')
      .pipe(
        map(stores => stores.map(store => {
          store.addressName = store.addressName.replace('Jumbo', '').trim();
          return store;
        }))
      );
  }
}