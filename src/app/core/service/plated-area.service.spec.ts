import { TestBed } from '@angular/core/testing';

import { PlatedAreaService } from './planted-area.service';

describe('PlatedAreaService', () => {
  let service: PlatedAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatedAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
