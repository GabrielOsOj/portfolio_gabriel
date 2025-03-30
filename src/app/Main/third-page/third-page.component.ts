import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { Positions, TecnologiesDTO } from './third-page-models/tecnologies-dto';
import { TecnologiesIF } from './third-page-models/tecnologies-if';
import { IconSvService } from '../../Core/services/icons/icon-sv.service';
import { TecnologiesCompComponent } from "./third-page-comp_tecnologies/tecnologies-comp.component";
import { TecnologiesSvService } from './third-page-services/tecnologies/tecnologies-sv.service';
import { AboutAndStudiesSvService } from './third-page-services/about-me_and_studies/about-and-studies-sv.service';
import { TextCardCompComponent } from "./third-page-comp_text-card/text-card-comp.component";
import { TextBoxIf } from './third-page-models/text-box-if';

@Component({
  selector: 'app-third-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TecnologiesCompComponent, TextCardCompComponent],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.css'
})
export class ThirdPageComponent implements OnInit {

  nextPage: string = "CONTACTO";

  tecnosIF?: Array<TecnologiesIF>

  constructor(private tecnoSv: TecnologiesSvService,
    private iconSv: IconSvService,
    private aboutAndStudiesSv: AboutAndStudiesSvService
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
        icons: tec.icons.map(icon => this.iconSv.getTecnoIcon(icon)),
        titlePosition: Object.values(Positions)[positionIndex]
      })

      positionIndex++;
      
    })
  }

  protected fnLoadStudies():TextBoxIf{
    return this.aboutAndStudiesSv.getStudies();
  }

  protected fnLoadAboutME():TextBoxIf{
    return this.aboutAndStudiesSv.getAboutMe();
  }
  
}
