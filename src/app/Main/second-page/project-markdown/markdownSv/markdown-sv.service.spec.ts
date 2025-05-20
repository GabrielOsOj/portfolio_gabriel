import { TestBed } from '@angular/core/testing';

import { MarkdownSvService } from './markdown-sv.service';

describe('MarkdownSvService', () => {
  let service: MarkdownSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
