import { Component } from '@angular/core';
import { IconInfoComponent } from "./fourth-page-comp_icon-info/icon-info.component";

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [IconInfoComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {

}
