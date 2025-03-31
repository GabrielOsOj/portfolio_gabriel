import { AfterViewInit, Component, ElementRef, input } from '@angular/core';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';
import { FooterComponent } from "../../Shared/footer/footer.component";

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent implements AfterViewInit{

  nextPage:string = "MIS PROYECTOS"

  isVisible=input<boolean>();

  constructor(private element:ElementRef){
    
  }

  ngAfterViewInit(): void {
    console.log(this.element.nativeElement.offsetHeight)
  }

  

}
