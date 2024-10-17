import { TestBed } from '@angular/core/testing';

import { SelosService } from './selos.service';

describe('SelosService', () => {
  let service: SelosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
