import { TestBed } from '@angular/core/testing';

import { FormOpenCloseService } from './form-open-close.service';

describe('FormOpenCloseService', () => {
  let service: FormOpenCloseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOpenCloseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
