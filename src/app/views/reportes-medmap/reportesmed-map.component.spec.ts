import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesMedMap } from './reportesmed-map.component';

describe('ReportesMedMap', () => {
  let component: ReportesMedMap;
  let fixture: ComponentFixture<ReportesMedMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesMedMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesMedMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
