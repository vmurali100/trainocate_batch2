import { TestBed } from '@angular/core/testing';

import { CricInterceptor } from './cric.interceptor';

describe('CricInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CricInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CricInterceptor = TestBed.inject(CricInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
