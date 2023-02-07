import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {StoreList} from "../models/stores";
import {storeListTestData} from "../test-data/store-data";

describe('StoreService', () => {
  let service: StoreService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [StoreService]
    });
    service = TestBed.inject(StoreService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve stores', () => {
    const dummyStores: StoreList[] = storeListTestData;

    service.getStores().subscribe(stores => {
      expect(stores.length).toBe(2);
      expect(stores[0].addressName).toEqual('Amsterdam Baarsjesweg');
      expect(stores[1].addressName).toEqual('Amsterdam Buikslotermeerplein');
    });

    const req = httpMock.expectOne(`https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyStores);
  });
});
