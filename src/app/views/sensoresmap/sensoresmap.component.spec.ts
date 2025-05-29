import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseSensorMapComponent } from './sensoresmap.component';

describe('CamionesComponent', () => {
  let component: NoiseSensorMapComponent;
  let fixture: ComponentFixture<NoiseSensorMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoiseSensorMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoiseSensorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
