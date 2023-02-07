import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresComponent } from './stores.component';
import {StoreService} from "../services/store.service";
import {NgxsModule, StateStream, Store} from "@ngxs/store";
import { Location } from '@angular/common';
import {AddStores} from "../state/stores.state";
import {storeListTestData} from "../test-data/store-data";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {ButtonComponent} from "../components/button/button.component";
import {FormsModule} from "@angular/forms";


describe('StoresComponent', () => {
  let component: StoresComponent;
  let fixture: ComponentFixture<StoresComponent>;
  let storeService: StoreService;
  let store: Store;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresComponent, ButtonComponent ],
      imports: [HttpClientTestingModule, NgxsModule.forRoot([]), FormsModule],
      providers: [
        StoreService,
        Store,
        Location,
        StateStream,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoresComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService);
    store = TestBed.inject(Store);
    location = TestBed.inject(Location);
    fixture.detectChanges();
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
});
