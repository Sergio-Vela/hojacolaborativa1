import { TestBed } from '@angular/core/testing';

import { Login } from '../../componets/login/login.component.spec';

describe('Login', () => {
  let service: Login;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
