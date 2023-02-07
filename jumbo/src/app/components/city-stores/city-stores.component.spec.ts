import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityStoresComponent } from './city-stores.component';
import {NgxsModule, Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {AddCity, StoreState} from "../../state/stores.state";

describe('CityStoresComponent', () => {
  let component: CityStoresComponent;
  let fixture: ComponentFixture<CityStoresComponent>;
  let store: Store;
  let router: Router;
  let cityName: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([StoreState])
      ],
      declarations: [ CityStoresComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityStoresComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
