import { ComponentFixture, TestBed } from '@angular/core/testing';

import {Movilidad } from './movilidad-inteligente.component';

describe('CamionesComponent', () => {
  let component: Movilidad;
  let fixture: ComponentFixture<Movilidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movilidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movilidad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
