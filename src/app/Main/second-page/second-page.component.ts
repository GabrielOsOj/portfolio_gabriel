import { AfterViewInit, Component, ElementRef, HostListener, input } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { ProyectCardComponent } from './project-card/project-card.component';
import { ProjectSvService } from './projects-service/project-sv.service';
import { ProjectIF } from './projects-models/project-if';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProyectCardComponent,CommonModule],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent{

  isVisible=input<boolean>();
  
  nextPage:string = "HABILIDADES";
  nextSection:string = "tecnologies"

  lastIndexCarrousel:number = 0;

  isLargeWidth:boolean;

  projectsList:Array<ProjectIF>; 
  threeProjects:Array<ProjectIF> = new Array();

  constructor(private projectSv:ProjectSvService,
  ){
    this.projectsList = this.projectSv.getProjectList();
    this.getThreeElements();
    this.isLargeWidth = false;
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
