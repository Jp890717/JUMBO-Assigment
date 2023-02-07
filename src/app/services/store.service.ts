import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, shareReplay} from 'rxjs';
import {map} from 'rxjs/operators';
import {StoreList} from "../models/stores";


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  stores$: any

  constructor(private http: HttpClient) {
  }

  getStores(): Observable<StoreList[]> {
    if (!this.stores$) {
      this.stores$ = this.http.get<StoreList[]>('https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e')
        .pipe(
          map(stores => stores.map(store => {
            store.addressName = store.addressName.replace('Jumbo', '').trim();
            return store;
          })),
          shareReplay(1)
        );
    }
    return this.stores$;
  }

}
