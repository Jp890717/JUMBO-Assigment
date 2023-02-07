import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import {Store, NgxsModule} from "@ngxs/store";
import {RouterTestingModule} from "@angular/router/testing";
import {AddCity, StoreState} from "../../state/stores.state";
import {Router} from "@angular/router";

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let store: Store;
  let router: Router;

  const stores = [
    {
    "type": "StoreListRO",
    "uuid": "vCoKYx4X08YAAAFIiL8YwKxJ",
    "addressName": "Amsterdam Buikslotermeerplein",
    "street": "Buikslotermeerplein",
    "street2": "52",
    "street3": "",
    "city": "Amsterdam",
    "postalCode": "1025 EW",
    "distance": 0,
    "todayOpen": "07:00",
    "todayClose": "22:00",
    "latitude": "52.399066",
    "longitude": "4.935776",
    "locationType": "SupermarktPuP",
    "newStore": 0,
    "collectionPoint": true,
    "complexNumber": "33510",
    "sapStoreID": "3054",
    "favourite": false,
    "isHomeStore": false,
    "showWarningMessage": true,
    "sundayOpen": true
  },{
      "type": "StoreListRO",
      "uuid": "f.AKYx4XC_IAAAFIvaoYwKxK",
      "addressName": "Amsterdam Buitenveldertselaan.",
      "street": "Buitenveldertselaan",
      "street2": "184",
      "street3": "",
      "city": "",
      "postalCode": "",
      "distance": 0,
      "todayOpen": "08:00",
      "todayClose": "22:00",
      "latitude": "52.324550",
      "longitude": "4.868105",
      "locationType": "SupermarktPuP",
      "newStore": 0,
      "collectionPoint": true,
      "complexNumber": "30196",
      "sapStoreID": "6448",
      "favourite": false,
      "isHomeStore": false,
      "showWarningMessage": true,
      "sundayOpen": true
    },{
      "type": "StoreListRO",
      "uuid": "SqYKYx4XpCAAAAFg4NQKf5qv",
      "addressName": "Amsterdam Buitenveldertselaan",
      "street": "Buitenveldertselaan",
      "street2": "184",
      "street3": "",
      "city": "Amsterdam",
      "postalCode": "1081 AC",
      "distance": 0,
      "todayOpen": "07:30",
      "todayClose": "22:00",
      "latitude": "52.324550",
      "longitude": "4.868105",
      "locationType": "SupermarktPuP",
      "newStore": 0,
      "collectionPoint": true,
      "complexNumber": "30196",
      "sapStoreID": "6454",
      "favourite": false,
      "isHomeStore": false,
      "showWarningMessage": true,
      "sundayOpen": true
    }]
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
    component.stores = stores;
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
