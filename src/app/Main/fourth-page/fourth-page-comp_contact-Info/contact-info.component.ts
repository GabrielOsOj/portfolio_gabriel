import { Component, input } from '@angular/core';
import { IconInfoComponent } from "./fourth-page-comp_icon-info/icon-info.component";
import { ContactDataIF } from '../fourth-page-models/contact-data-if';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [IconInfoComponent,CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {

  contactData=input.required<ContactDataIF>();

}
