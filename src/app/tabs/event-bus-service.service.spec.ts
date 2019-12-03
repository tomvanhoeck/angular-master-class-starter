import { TestBed } from '@angular/core/testing';

import { EventBusServiceService } from './event-bus-service.service';

describe('EventBusServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventBusServiceService = TestBed.get(EventBusServiceService);
    expect(service).toBeTruthy();
  });
});
