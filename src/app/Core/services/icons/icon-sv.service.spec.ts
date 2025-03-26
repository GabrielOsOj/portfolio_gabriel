import { TestBed } from '@angular/core/testing';

import { IconSvService } from './icon-sv.service';

describe('IconSvService', () => {
  let service: IconSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
