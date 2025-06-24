import { Component, input } from '@angular/core';
import { IconInfoComponent } from "./fourth-page-comp_icon-info/icon-info.component";
import { ContactDataIF } from '../fourth-page-models/contact-data-if';
import { CommonModule } from '@angular/common';
import { IconSvService } from '../../../Core/services/icons/icon-sv.service';
import { IconIF } from '../../../Core/models/icon-if';

import {ClipboardModule} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [IconInfoComponent,CommonModule,ClipboardModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {

  contactData=input.required<ContactDataIF>();
  
  ubicationIcon:string;
  emailIcon:string;

  constructor(private iconSv:IconSvService){

    this.ubicationIcon=iconSv.getUtilityIcon(<IconIF>{'name':'ubication'})
    this.emailIcon=iconSv.getUtilityIcon(<IconIF>{'name':'email'})

  }

}
