import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormOpenCloseService {

  constructor() { }

  private modalOpen = new BehaviorSubject<boolean>(false);

  $isContactFormOpen = this.modalOpen.asObservable();

  public openFormModal():void{
    this.modalOpen.next(true);
  }

  public closeFormModal():void{
    this.modalOpen.next(false);
  }
}
