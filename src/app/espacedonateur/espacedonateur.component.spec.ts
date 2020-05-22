import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacedonateurComponent } from './espacedonateur.component';

describe('EspacedonateurComponent', () => {
  let component: EspacedonateurComponent;
  let fixture: ComponentFixture<EspacedonateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacedonateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacedonateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
