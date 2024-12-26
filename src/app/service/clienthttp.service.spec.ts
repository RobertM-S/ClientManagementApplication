import { TestBed } from '@angular/core/testing';

import { ClienthttpService } from './clienthttp.service';

describe('ClienthttpService', () => {
  let service: ClienthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
