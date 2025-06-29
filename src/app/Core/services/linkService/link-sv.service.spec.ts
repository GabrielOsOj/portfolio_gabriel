import { TestBed } from '@angular/core/testing';

import { LinkSvService } from './link-sv.service';

describe('LinkSvService', () => {
  let service: LinkSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
