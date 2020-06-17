import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDonationsComponent } from './mes-donations.component';

describe('MesDonationsComponent', () => {
  let component: MesDonationsComponent;
  let fixture: ComponentFixture<MesDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
