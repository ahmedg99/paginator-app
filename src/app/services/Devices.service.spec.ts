/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DevicesService } from './Devices.service';

describe('Service: Devices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicesService]
    });
  });

  it('should ...', inject([DevicesService], (service: DevicesService) => {
    expect(service).toBeTruthy();
  }));
});
