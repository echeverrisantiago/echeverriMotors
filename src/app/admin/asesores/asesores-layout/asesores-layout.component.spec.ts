import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoresLayoutComponent } from './asesores-layout.component';

describe('AsesoresLayoutComponent', () => {
  let component: AsesoresLayoutComponent;
  let fixture: ComponentFixture<AsesoresLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesoresLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoresLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
