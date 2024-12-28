import { TestBed } from '@angular/core/testing';

import { MylangService } from './mylang.service';

describe('MylangService', () => {
  let service: MylangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MylangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
