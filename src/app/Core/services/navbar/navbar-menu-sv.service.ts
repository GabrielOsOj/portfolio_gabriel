import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarMenuSvService {


  private isMenuOpen = new BehaviorSubject<boolean>(false);

  public $menuOpen = this.isMenuOpen.asObservable();

  constructor() { }

  public openMenu(){
    this.isMenuOpen.next(true);
  }

  public closeMenu(){
    this.isMenuOpen.next(false);
  }
}
