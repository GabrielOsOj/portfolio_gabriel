import { Component, input } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { ContactInfoComponent } from "./fourth-page-comp_contact-Info/contact-info.component";
import { ContactDataService } from './fourth-page-services/contact-data/contact-data.service';
import { ContactDataIF } from './fourth-page-models/contact-data-if';
import { ContactFormComponent } from "./fourth-page-comp_contact-form/contact-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fourth-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ContactInfoComponent, ContactFormComponent, CommonModule],
  templateUrl: './fourth-page.component.html',
  styleUrl: './fourth-page.component.css'
})
export class FourthPageComponent {

  isVisible=input<boolean>();

  contactData:ContactDataIF;

  formVisible:boolean = false;
  
  constructor(private contactDataSv:ContactDataService){
    this.contactData = contactDataSv.getContactData();
  }

  public fnOpenMenu():void{
    this.formVisible = true;
  }

  
  public fnCloseMenu(event:any):void{
    this.formVisible = false;
  }
}
