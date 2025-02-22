import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Turismo } from './siata.component';

describe('CamionesComponent', () => {
  let component: Turismo;
  let fixture: ComponentFixture<Turismo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Turismo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Turismo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
