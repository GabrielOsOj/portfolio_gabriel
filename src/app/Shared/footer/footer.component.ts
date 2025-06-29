import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GoToSvService } from '../../Core/services/goTo/go-to-sv.service';
import { LinkSvService } from '../../Core/services/linkService/link-sv.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  nextPage = input.required<string>();
  nextSection = input<string>("");

  animationsActive = input<boolean>(true);

  isLastPage = input<boolean>(false);
  constructor(private goToSv:GoToSvService,
    private linksSv:LinkSvService
  ){

  }

  public getLinks(){
    return this.linksSv.fnGetLinks();
  }

  public goToSec(){
    this.goToSv.goToSection(this.nextSection())
  }
}
