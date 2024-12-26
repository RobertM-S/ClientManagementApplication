import { TestBed } from '@angular/core/testing';

import { ProjecthttpService } from './projecthttp.service';

describe('ProjecthttpService', () => {
  let service: ProjecthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjecthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
