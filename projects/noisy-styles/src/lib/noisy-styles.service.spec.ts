import { TestBed } from '@angular/core/testing';

import { NoisyStylesService } from './noisy-styles.service';

describe('NoisyStylesService', () => {
  let service: NoisyStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoisyStylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
