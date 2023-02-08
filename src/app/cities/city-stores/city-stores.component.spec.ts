import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityStoresComponent } from './city-stores.component';
import {NgxsModule, Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {StoreState} from "../../state/stores.state";
import {storeListTestData} from "../../test-data/store-data";
import {ButtonComponent} from "../../components/button/button.component";

describe('CityStoresComponent', () => {
  let component: CityStoresComponent;
  let fixture: ComponentFixture<CityStoresComponent>;
  let store: Store;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([StoreState])
      ],
      declarations: [
        CityStoresComponent,
        ButtonComponent
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityStoresComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  beforeEach(() => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    component = new CityStoresComponent(store, router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set cityName using selectSnapshot', () => {
    const city = 'Amsterdam';
    spyOn(store, 'selectSnapshot').and.returnValue(city);
    const component = new CityStoresComponent(store, router);
    component.getCityName();
    expect(component.cityName).toEqual(city);
  });

  it('should set stores filtered by cityName', () => {
    const stores = storeListTestData;
    spyOn(store, 'selectSnapshot').and.returnValue(stores);
    const component = new CityStoresComponent(store, router);
    component.cityName = 'Amsterdam';
    component.getStores();
    expect(component.storeList).toEqual(storeListTestData);
  });

  it('should navigate to "/stores" with query parameters "showCities" set to true and "showStores" set to false', () => {
    component.back();
    expect(router.navigate).toHaveBeenCalledWith(['/stores'], {
      queryParams: {
        showCities: true
      }
    });
  });

});
