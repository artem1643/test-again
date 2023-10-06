import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authActiveGuard } from './auth-active.guard';

describe('authActiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authActiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
