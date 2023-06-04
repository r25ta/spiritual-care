import { TestBed } from '@angular/core/testing';

import { GoersService } from './goers.service';

describe('GoersService', () => {
  let service: GoersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
