import { TestBed } from '@angular/core/testing';

import { DrumsService } from './drums.service';

describe('DrumsService', () => {
  let service: DrumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
