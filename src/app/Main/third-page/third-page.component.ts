import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";

@Component({
  selector: 'app-third-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.css'
})
export class ThirdPageComponent {

  nextPage:string = "";

}
