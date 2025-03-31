import { TestBed } from '@angular/core/testing';

import { NavbarMenuSvService } from './navbar-menu-sv.service';

describe('NavbarMenuSvService', () => {
  let service: NavbarMenuSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarMenuSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
