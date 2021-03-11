import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoresCreateComponent } from './asesores-create.component';

describe('AsesoresCreateComponent', () => {
  let component: AsesoresCreateComponent;
  let fixture: ComponentFixture<AsesoresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesoresCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
