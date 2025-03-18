import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { ProyectCardComponent } from './proyect-card/project-card.component';
import { ProjectSvService } from '../../Core/services/projects/project-sv.service';
import { ProjectIF } from '../../Core/models/project-if';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProyectCardComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

  nextPage:string = "HABILIDADES";
  projectsList:Array<ProjectIF>; 

  constructor(private projectSv:ProjectSvService){
    this.projectsList = this.projectSv.getProjectList();
  }
  

}
