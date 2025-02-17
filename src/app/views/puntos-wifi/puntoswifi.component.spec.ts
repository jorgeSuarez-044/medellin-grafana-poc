import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesMedicos } from './puntoswifi.component';

describe('CamionesComponent', () => {
  let component: ReportesMedicos;
  let fixture: ComponentFixture<ReportesMedicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesMedicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesMedicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
