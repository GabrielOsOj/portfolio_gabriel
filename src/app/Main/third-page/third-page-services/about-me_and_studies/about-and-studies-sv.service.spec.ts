import { TestBed } from '@angular/core/testing';

import { AboutAndStudiesSvService } from './about-and-studies-sv.service';

describe('AboutAndStudiesSvService', () => {
  let service: AboutAndStudiesSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutAndStudiesSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
