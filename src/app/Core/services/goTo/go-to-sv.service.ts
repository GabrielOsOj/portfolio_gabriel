import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoToSvService {

  private secToGo: BehaviorSubject<string> = new BehaviorSubject('');
  public $goToSect = this.secToGo.asObservable();

  constructor() { }

  public goToSection(section: string) {
    this.secToGo.next(section);
  }

}
