import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosLayoutComponent } from './productos-layout.component';

describe('ProductosLayoutComponent', () => {
  let component: ProductosLayoutComponent;
  let fixture: ComponentFixture<ProductosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
