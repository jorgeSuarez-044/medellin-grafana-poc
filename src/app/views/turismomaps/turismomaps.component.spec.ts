import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoMaps } from './turismomaps.component';

describe('CamionesComponent', () => {
  let component: TurismoMaps;
  let fixture: ComponentFixture<TurismoMaps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurismoMaps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismoMaps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
