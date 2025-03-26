import { TestBed } from '@angular/core/testing';

import { EmailSvService } from './email-sv.service';

describe('EmailSvService', () => {
  let service: EmailSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
