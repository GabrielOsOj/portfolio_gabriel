import { TestBed } from '@angular/core/testing';

import { ProjectSvService } from './project-sv.service';

describe('ProjectSvService', () => {
  let service: ProjectSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
