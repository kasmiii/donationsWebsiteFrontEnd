import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectuerdemandeComponent } from './effectuerdemande.component';

describe('EffectuerdemandeComponent', () => {
  let component: EffectuerdemandeComponent;
  let fixture: ComponentFixture<EffectuerdemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectuerdemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectuerdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
