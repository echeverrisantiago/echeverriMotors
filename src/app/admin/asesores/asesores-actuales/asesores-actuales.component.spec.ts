import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoresActualesComponent } from './asesores-actuales.component';

describe('AsesoresActualesComponent', () => {
  let component: AsesoresActualesComponent;
  let fixture: ComponentFixture<AsesoresActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesoresActualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoresActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
