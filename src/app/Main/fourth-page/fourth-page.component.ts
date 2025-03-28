import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { ContactInfoComponent } from "./fourth-page-comp_contact-Info/contact-info.component";
import { ContactDataService } from './fourth-page-services/contact-data/contact-data.service';
import { ContactDataIF } from './fourth-page-models/contact-data-if';
import { ContactFormComponent } from "./fourth-page-comp_contact-form/contact-form.component";

@Component({
  selector: 'app-fourth-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ContactInfoComponent, ContactFormComponent],
  templateUrl: './fourth-page.component.html',
  styleUrl: './fourth-page.component.css'
})
export class FourthPageComponent {

  contactData:ContactDataIF;
  
  constructor(private contactDataSv:ContactDataService){
    this.contactData = contactDataSv.getContactData();
  }



}
