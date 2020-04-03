import { TestBed } from '@angular/core/testing';

import { TabbarService } from './tabbar.service';

describe('TabbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabbarService = TestBed.get(TabbarService);
    expect(service).toBeTruthy();
  });
});
