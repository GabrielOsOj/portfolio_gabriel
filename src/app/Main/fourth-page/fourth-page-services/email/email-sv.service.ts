import { Injectable } from '@angular/core';
import { MessageIf } from '../../fourth-page-models/message-data-if';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailSvService {

  private client: HttpClient;
 

  constructor(cli: HttpClient) {
    this.client = cli; 
  }

  public sendMessage(messageBody: MessageIf): void {
    this.client.post(environment.LOCAL_HOST_DIR,
      messageBody,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': environment.LOCAL_HOST_DIR,
          'Access-Control-Allow-Credentials': 'true'
        },
      }).subscribe();
  }
}