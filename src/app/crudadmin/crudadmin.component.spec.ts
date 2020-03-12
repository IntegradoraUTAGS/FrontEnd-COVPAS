import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDAdminComponent } from './crudadmin.component';

describe('CRUDAdminComponent', () => {
  let component: CRUDAdminComponent;
  let fixture: ComponentFixture<CRUDAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
