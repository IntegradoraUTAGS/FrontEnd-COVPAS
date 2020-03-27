import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPasesalidaComponent } from './confirmar-pasesalida.component';

describe('ConfirmarPasesalidaComponent', () => {
  let component: ConfirmarPasesalidaComponent;
  let fixture: ComponentFixture<ConfirmarPasesalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarPasesalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarPasesalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
