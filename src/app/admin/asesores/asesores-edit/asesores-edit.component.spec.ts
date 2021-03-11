import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoresEditComponent } from './asesores-edit.component';

describe('AsesoresEditComponent', () => {
  let component: AsesoresEditComponent;
  let fixture: ComponentFixture<AsesoresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesoresEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
