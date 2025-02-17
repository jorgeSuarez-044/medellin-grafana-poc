import { ComponentFixture, TestBed } from '@angular/core/testing';

import {Vamosmed } from './vamosmed.component';

describe('CamionesComponent', () => {
  let component: Vamosmed;
  let fixture: ComponentFixture<Vamosmed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vamosmed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vamosmed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
