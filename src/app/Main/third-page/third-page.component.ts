import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { TecnCompDTO } from './third-page-dto/tecn-comp-dto';
import { TecnologiesSvService } from './third-page-services/tecnologies-sv.service';

@Component({
  selector: 'app-third-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.css'
})
export class ThirdPageComponent {

  nextPage:string = "";

  tecnoDTO?:Array<TecnCompDTO>

  constructor(private tecnoSv:TecnologiesSvService){
    this.tecnoDTO = this.tecnoSv.getTecnologiesData();
  }

  private fnObjectFactory(){

  }

}
