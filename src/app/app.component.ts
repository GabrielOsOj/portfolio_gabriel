import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPageComponent } from "./Main/first-page/first-page.component";
import { SecondPageComponent } from "./Main/second-page/second-page.component";
import { ThirdPageComponent } from "./Main/third-page/third-page.component";
import { FourthPageComponent } from "./Main/fourth-page/fourth-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstPageComponent, SecondPageComponent, ThirdPageComponent, FourthPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-gabriel_ojeda';
}
