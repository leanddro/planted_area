import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { plantedResolver } from './planted.resolver';

describe('plantedResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => plantedResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
