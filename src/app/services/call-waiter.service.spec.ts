import { TestBed } from '@angular/core/testing';

import { CallWaiterService } from './call-waiter.service';

describe('CallWaiterService', () => {
  let service: CallWaiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallWaiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
