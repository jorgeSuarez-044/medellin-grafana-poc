import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VamosMedMap } from './vamosmed-map.component';

describe('CamionesComponent', () => {
  let component: VamosMedMap;
  let fixture: ComponentFixture<VamosMedMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VamosMedMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VamosMedMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
