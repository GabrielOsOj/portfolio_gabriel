import { TestBed } from '@angular/core/testing';

import { ThirdPageServicesTecnologiesSvService } from './tecnologies-sv.service';

describe('ThirdPageServicesTecnologiesSvService', () => {
  let service: ThirdPageServicesTecnologiesSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdPageServicesTecnologiesSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
