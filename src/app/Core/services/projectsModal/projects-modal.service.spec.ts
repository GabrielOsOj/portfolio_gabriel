import { TestBed } from '@angular/core/testing';

import { ProjectsModalService } from './projects-modal.service';

describe('ProjectsModalService', () => {
  let service: ProjectsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
