import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsModalService } from '../../../Core/services/projectsModal/projects-modal.service';
import { IconSvService } from '../../../Core/services/icons/icon-sv.service';
import { IconIF } from '../../../Core/models/icon-if';
import { MarkdownComponentComponent } from "../project-markdown/markdown-component/markdown-component.component";
import { ProjectDetailsIF } from '../projects-models/project-details-if';

@Component({
  selector: 'app-projects-modal',
  standalone: true,
  imports: [CommonModule, MarkdownComponentComponent],
  templateUrl: './projects-modal.component.html',
  styleUrl: './projects-modal.component.css'
})
export class ProjectsModalComponent {

  isModalOpen:boolean = false;
  menuIcon:string;
  modalData:ProjectDetailsIF= {} as ProjectDetailsIF;
  activeIndex = 0;
  hasOtherTechs = false;

  public constructor(private iconSv:IconSvService,
    private modalSv:ProjectsModalService){
      this.menuIcon = iconSv.getUtilityIcon(<IconIF>{name:"cross"});

    this.modalSv.$modalOpen.subscribe((m)=>{
      this.isModalOpen = m;
    })

    this.modalSv.loadProjectData({
    "title": "Bazar app",
    "description": "Crud para tienda de bazar",
    "tecnologies": [
      {
        "name": "Java"
      },
      {
        "name": "Spring"
      },
      {
        "name": "MySQL"
      },
      {
        "name": "Html"
      },
      {
        "name": "Css"
      },
      {
        "name": "Javascript"
      },
      {
        "name": "Docker"
      }
    ],
    "image": "assets/images/ecommerce.png",
    "detailsUrl": "/assets/projects/bazarApp/bazarApp.json"
  }
    )

    this.modalSv.$projectData.subscribe((d)=>{
      this.modalData = d;
      this.loadFirstImage();
      if(d.technologies.otherTechs.length!=0){
        this.hasOtherTechs = true;
      }
    })

  }

  public closeModal():void {
    this.modalSv.closeModal();
  }

  private loadFirstImage():void{ 
    console.log(this.modalData.images)
  }

  public loadIcon(name:string):string{
    return this.iconSv.getTecnoIcon({name:name})
  }

  /*Modal controllers*/ 

  public nextImg():void{
    this.activeIndex = (this.activeIndex>0)?
      this.activeIndex-1:
      this.modalData.images.length-1;
  }

  public previousImg():void{
    this.activeIndex = (this.activeIndex<this.modalData.images.length-1)?
       this.activeIndex+1:
       0;
  }

  public setActiveIndex(index:number){
    this.activeIndex = index;
  }
}