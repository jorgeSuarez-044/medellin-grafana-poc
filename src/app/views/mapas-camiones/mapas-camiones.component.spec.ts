import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasCamiones } from './mapas-camiones.component';

describe('MapasCamiones', () => {
  let component: MapasCamiones;
  let fixture: ComponentFixture<MapasCamiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapasCamiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapasCamiones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
