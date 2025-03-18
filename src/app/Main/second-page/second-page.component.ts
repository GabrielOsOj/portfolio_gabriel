import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

  nextPage:string = "HABILIDADES"

}
