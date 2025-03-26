import { Injectable } from '@angular/core';
import { MessageIf } from '../../fourth-page-models/message-data-if';

@Injectable({
  providedIn: 'root'
})
export class EmailSvService {

  constructor() { }

  public sendMessage(messageBody:MessageIf):void{
    console.log(messageBody);
  }

}
