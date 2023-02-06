import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityStoresComponent } from './city-stores.component';

describe('CityStoresComponent', () => {
  let component: CityStoresComponent;
  let fixture: ComponentFixture<CityStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityStoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
