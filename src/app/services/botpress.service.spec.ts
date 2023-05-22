import { TestBed } from '@angular/core/testing';

import { BotpressService } from './botpress.service';

describe('BotpressService', () => {
  let service: BotpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
