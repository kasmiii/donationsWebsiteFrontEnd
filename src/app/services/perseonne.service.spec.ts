import { TestBed } from '@angular/core/testing';

import { PerseonneService } from './perseonne.service';

describe('PerseonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerseonneService = TestBed.get(PerseonneService);
    expect(service).toBeTruthy();
  });
});
