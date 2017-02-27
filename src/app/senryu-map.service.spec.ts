/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SenryuMapService } from './senryu-map.service';

describe('SenryuMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SenryuMapService]
    });
  });

  it('should ...', inject([SenryuMapService], (service: SenryuMapService) => {
    expect(service).toBeTruthy();
  }));
});
