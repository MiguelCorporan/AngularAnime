import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselhorizontalComponent } from './carrouselhorizontal.component';

describe('CarrouselhorizontalComponent', () => {
  let component: CarrouselhorizontalComponent;
  let fixture: ComponentFixture<CarrouselhorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselhorizontalComponent]
    });
    fixture = TestBed.createComponent(CarrouselhorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
