import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasLayoutComponent } from './ventas-layout.component';

describe('VentasLayoutComponent', () => {
  let component: VentasLayoutComponent;
  let fixture: ComponentFixture<VentasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
