import { TestBed } from '@angular/core/testing';

import { MeetinghttpService } from './meetinghttp.service';

describe('MeetinghttpService', () => {
  let service: MeetinghttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetinghttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
