import { TestBed } from '@angular/core/testing';

import { SubmitOrderService } from './submit-order.service';

describe('SubmitOrderService', () => {
  let service: SubmitOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
