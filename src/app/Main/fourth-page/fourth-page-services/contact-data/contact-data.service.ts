import { Injectable } from '@angular/core';
import { ContactDataIF } from '../../fourth-page-models/contact-data-if';

import contactData from '../../../../Core/mocks/contact-data/contact-data.json';
@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor() { }

  public getContactData():ContactDataIF{
    return contactData;
  }
}
