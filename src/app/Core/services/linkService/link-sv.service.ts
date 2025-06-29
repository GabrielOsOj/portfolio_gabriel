import { Injectable } from '@angular/core';
import * as links from '../../mocks/contact-links/contact-links.json'

@Injectable({
  providedIn: 'root'
})
export class LinkSvService {

  constructor() { }

  public fnGetLinks(){
    return links;
  }
}
