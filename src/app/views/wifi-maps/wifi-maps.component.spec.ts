import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiMaps } from './wifi-maps.component';

describe('WifiMaps', () => {
  let component: WifiMaps;
  let fixture: ComponentFixture<WifiMaps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiMaps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiMaps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
