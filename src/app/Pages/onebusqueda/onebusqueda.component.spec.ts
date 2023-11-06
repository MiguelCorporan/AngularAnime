import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnebusquedaComponent } from './onebusqueda.component';

describe('OnebusquedaComponent', () => {
  let component: OnebusquedaComponent;
  let fixture: ComponentFixture<OnebusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnebusquedaComponent]
    });
    fixture = TestBed.createComponent(OnebusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
