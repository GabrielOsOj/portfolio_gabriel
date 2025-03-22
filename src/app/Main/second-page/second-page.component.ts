import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { ProyectCardComponent } from './proyect-card/project-card.component';
import { ProjectSvService } from './projects-service/project-sv.service';
import { ProjectIF } from '../../Core/models/icon-if';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProyectCardComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

  nextPage:string = "HABILIDADES";
  lastIndexCarrousel:number = 0;

  projectsList:Array<ProjectIF>; 
  threeProjects:Array<ProjectIF> = new Array();

  constructor(private projectSv:ProjectSvService){
    this.projectsList = this.projectSv.getProjectList();
    this.getThreeElements();
  }
  
  public getThreeElements():void{

    let projectList:Array<ProjectIF> = new Array();
  
    for (let i = this.lastIndexCarrousel; i < 3; i++) {
  
      projectList.push(this.projectsList[i]);
    
    }
    this.lastIndexCarrousel+=3;
    this.threeProjects = projectList;
  }

  public nextProject(){
    this.threeProjects.push(this.projectsList[this.lastIndexCarrousel]);
    this.threeProjects.shift()

    if(this.lastIndexCarrousel == this.projectsList.length-1){
      this.lastIndexCarrousel = 0;
      return;
    }
    this.lastIndexCarrousel++;
  }

  public prevProject(){
    this.threeProjects.unshift(this.projectsList[this.lastIndexCarrousel]);
    this.threeProjects.pop();

    if(this.lastIndexCarrousel == 0){
      this.lastIndexCarrousel = this.projectsList.length-1;
      return;
    }
    this.lastIndexCarrousel--;
  }


}
