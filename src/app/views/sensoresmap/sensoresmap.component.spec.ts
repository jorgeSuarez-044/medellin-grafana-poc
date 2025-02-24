import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoresMap } from './sensoresmap.component';

describe('CamionesComponent', () => {
  let component: SensoresMap;
  let fixture: ComponentFixture<SensoresMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensoresMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensoresMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
