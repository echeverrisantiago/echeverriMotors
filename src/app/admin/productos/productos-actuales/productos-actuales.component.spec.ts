import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosActualesComponent } from './productos-actuales.component';

describe('ProductosActualesComponent', () => {
  let component: ProductosActualesComponent;
  let fixture: ComponentFixture<ProductosActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosActualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
