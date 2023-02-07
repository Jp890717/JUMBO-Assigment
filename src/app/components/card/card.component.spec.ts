import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import {Store, NgxsModule} from "@ngxs/store";
import {RouterTestingModule} from "@angular/router/testing";
import {AddCity, StoreState} from "../../state/stores.state";
import {Router} from "@angular/router";
import {storeListTestData} from "../../test-data/store-data";

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let store: Store;
  let router: Router;

  const stores = storeListTestData;

  const cities = [
    {
    "city": "Aalsmeer"
    }, {
      "city": "Aalst"
    }, {
      "city": "Aalten"
    }, {
      "city": "Aardenburg"
    }, {
      "city": "Alkmaar"
    }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([StoreState])
      ],
      declarations: [ CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    spyOn(store, 'dispatch');
    spyOn(router, 'navigate');
    component.stores = storeListTestData;
    component.cities = cities;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch AddCity action and should navigate to "/city-stores" on showStores', () => {
    component.showStores('Amsterdam');
    store.dispatch(new AddCity('Amsterdam'));
    expect(store.dispatch).toHaveBeenCalledWith(new AddCity('Amsterdam'));
    expect(router.navigate).toHaveBeenCalledWith(['/city-stores']);
  });

  it('should set stores input property', () => {
    expect(component.stores).toEqual(stores);
  });

  it('should set cities input property', () => {
    expect(component.cities).toEqual(cities);
  });

});
