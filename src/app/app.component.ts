import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPageComponent } from "./Main/first-page/first-page.component";
import { SecondPageComponent } from "./Main/second-page/second-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstPageComponent, SecondPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-gabriel_ojeda';
}
