import { TestBed } from '@angular/core/testing';

import { AdminguardserviceService } from './adminguardservice.service';

describe('AdminguardserviceService', () => {
  let service: AdminguardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminguardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
