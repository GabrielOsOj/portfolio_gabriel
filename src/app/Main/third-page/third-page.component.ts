import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { Positions, TecnologiesDTO } from './third-page-models/tecnologies-dto';
import { TecnologiesSvService } from './third-page-services/tecnologies-sv.service';
import { TecnologiesIF } from './third-page-models/tecnologies-if';
import { IconSvService } from '../../Core/services/icons/icon-sv.service';
import { TecnologiesCompComponent } from "./third-page-comp_tecnologies/tecnologies-comp.component";

@Component({
  selector: 'app-third-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TecnologiesCompComponent],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.css'
})
export class ThirdPageComponent implements OnInit {

  nextPage: string = "";

  tecnosIF?: Array<TecnologiesIF>

  constructor(private tecnoSv: TecnologiesSvService,
    private iconSv: IconSvService
  ) {
    this.tecnosIF = this.tecnoSv.getTecnologiesData();
  }


  ngOnInit(): void {
    this.fnLoadTecnos();
  }

  tecnosDTO: Array<TecnologiesDTO> = [];

  private fnLoadTecnos(): void {
    let positionIndex: number = 0;
 

    this.tecnosIF?.forEach(tec => {

      this.tecnosDTO.push(<TecnologiesDTO>{
        title: tec.title,
        icons: tec.icons.map(icon => this.iconSv.getIcon(icon)),
        titlePosition: Object.values(Positions)[positionIndex]
      })

      positionIndex++;
      
    })
  }


}
