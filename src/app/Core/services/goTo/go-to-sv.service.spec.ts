import { TestBed } from '@angular/core/testing';

import { GoToSvService } from './go-to-sv.service';

describe('GoToSvService', () => {
  let service: GoToSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoToSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
