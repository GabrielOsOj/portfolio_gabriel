import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { ContactInfoComponent } from "./fourth-page-comp_contact-Info/contact-info.component";

@Component({
  selector: 'app-fourth-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ContactInfoComponent],
  templateUrl: './fourth-page.component.html',
  styleUrl: './fourth-page.component.css'
})
export class FourthPageComponent {

}
