import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiataMaps } from './siatamaps.component';

describe('CamionesComponent', () => {
  let component: SiataMaps;
  let fixture: ComponentFixture<SiataMaps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiataMaps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiataMaps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
