import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasAgregarComponent } from './ventas-agregar.component';

describe('VentasAgregarComponent', () => {
  let component: VentasAgregarComponent;
  let fixture: ComponentFixture<VentasAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
