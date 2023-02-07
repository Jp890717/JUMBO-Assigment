import {ComponentFixture, TestBed} from '@angular/core/testing';
import { StoresComponent } from './stores.component';
import {StoreService} from "../services/store.service";
import {NgxsModule, StateStream, Store} from "@ngxs/store";
import {AddStores} from "../state/stores.state";
import {storeListTestData} from "../test-data/store-data";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {ButtonComponent} from "../components/button/button.component";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {CardComponent} from "../components/card/card.component";
import {RouterTestingModule} from "@angular/router/testing";


describe('StoresComponent', () => {
  let component: StoresComponent;
  let fixture: ComponentFixture<StoresComponent>;
  let storeService: StoreService;
  let store: Store;
  let activatedRoute: ActivatedRoute;
  let route: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresComponent, ButtonComponent, CardComponent ],
      imports: [HttpClientTestingModule, NgxsModule.forRoot([]), FormsModule, RouterTestingModule  ],
      providers: [
        StoreService,
        Store,
        StateStream
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoresComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService);
    store = TestBed.inject(Store);
    activatedRoute = TestBed.inject(ActivatedRoute);
    route = TestBed.inject(Router);
    fixture.detectChanges();
  });

  beforeEach(() => {
    activatedRoute = {
      snapshot: {
        queryParams: {}
      }
    } as any;
    component = new StoresComponent(storeService, store, activatedRoute, route);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getStores() and dispatch AddStores action on component initialization', () => {
    spyOn(storeService, 'getStores').and.returnValue(of(storeListTestData));
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(storeService.getStores).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(new AddStores(storeListTestData));
  });

  it('should update the searchString on input', () => {
    component.onInput({ target: { value: 'Amsterdam' } });
    expect(component.searchString).toEqual('Amsterdam');
  });

  it('should set showCities to true if showCities query parameter is set to "true"', () => {
    activatedRoute.snapshot.queryParams = { showCities: 'true' };
    component.ngAfterContentInit();
    expect(component.showCities).toBeTruthy();
  });

  it('should set showStores to true if showStores query parameter is not set to "false"', () => {
    activatedRoute.snapshot.queryParams = { showStores: 'true' };
    component.ngAfterContentInit();
    expect(component.showStores).toBeTruthy();
  });

  it('should set showStores to false if showStores query parameter is set to "false"', () => {
    activatedRoute.snapshot.queryParams = { showStores: 'false' };
    component.ngAfterContentInit();
    expect(component.showStores).toBeFalsy();
  });
});
