import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pqrsd } from './pqrsd.component';

describe('Pqrsd', () => {
  let component: Pqrsd;
  let fixture: ComponentFixture<Pqrsd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pqrsd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pqrsd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
