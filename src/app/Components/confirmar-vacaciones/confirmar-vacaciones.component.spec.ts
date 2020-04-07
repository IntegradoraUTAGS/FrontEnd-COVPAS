import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarVacacionesComponent } from './confirmar-vacaciones.component';

describe('ConfirmarVacacionesComponent', () => {
  let component: ConfirmarVacacionesComponent;
  let fixture: ComponentFixture<ConfirmarVacacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarVacacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
