import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { login2guardGuard } from './login2guard.guard';

describe('login2guardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => login2guardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
