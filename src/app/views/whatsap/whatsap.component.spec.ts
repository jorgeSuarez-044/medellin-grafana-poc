import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsApp } from './whatsap.component';

describe('CamionesComponent', () => {
  let component: WhatsApp;
  let fixture: ComponentFixture<WhatsApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
