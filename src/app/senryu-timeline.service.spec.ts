/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SenryuTimelineService } from './senryu-timeline.service';

describe('SenryuTimelineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SenryuTimelineService]
    });
  });

  it('should ...', inject([SenryuTimelineService], (service: SenryuTimelineService) => {
    expect(service).toBeTruthy();
  }));
});
