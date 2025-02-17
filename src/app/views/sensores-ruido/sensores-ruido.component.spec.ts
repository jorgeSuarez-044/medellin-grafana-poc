import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoresRuidoComponent } from './sensores-ruido.component';

describe('SensoresRuidoComponent', () => {
  let component: SensoresRuidoComponent;
  let fixture: ComponentFixture<SensoresRuidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensoresRuidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensoresRuidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
