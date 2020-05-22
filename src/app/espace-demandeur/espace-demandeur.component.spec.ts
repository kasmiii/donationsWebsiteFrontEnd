import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceDemandeurComponent } from './espace-demandeur.component';

describe('EspaceDemandeurComponent', () => {
  let component: EspaceDemandeurComponent;
  let fixture: ComponentFixture<EspaceDemandeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceDemandeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceDemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
