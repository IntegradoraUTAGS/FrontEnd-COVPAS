import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudvehiculosComponent } from './crudvehiculos.component';

describe('CrudvehiculosComponent', () => {
  let component: CrudvehiculosComponent;
  let fixture: ComponentFixture<CrudvehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudvehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudvehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
