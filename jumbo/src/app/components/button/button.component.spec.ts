import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  const btnClass = 'btn-primary';
  const buttonText = 'button';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.btnClass = btnClass;
    component.buttonText = buttonText;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set btnClass input property', () => {
    expect(component.btnClass).toEqual(btnClass);
  });

  it('should set buttonText input property', () => {
    expect(component.buttonText).toEqual(buttonText);
  });
});
