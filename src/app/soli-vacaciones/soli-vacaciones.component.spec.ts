import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoliVacacionesComponent } from './soli-vacaciones.component';

describe('SoliVacacionesComponent', () => {
  let component: SoliVacacionesComponent;
  let fixture: ComponentFixture<SoliVacacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoliVacacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
