import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsModalService } from '../../../Core/services/projectsModal/projects-modal.service';
import { IconSvService } from '../../../Core/services/icons/icon-sv.service';
import { IconIF } from '../../../Core/models/icon-if';

@Component({
  selector: 'app-projects-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-modal.component.html',
  styleUrl: './projects-modal.component.css'
})
export class ProjectsModalComponent {

  isModalOpen:boolean = false;
  menuIcon:string;


  public constructor(private iconSv:IconSvService,
    private modalSv:ProjectsModalService){
      this.menuIcon = iconSv.getUtilityIcon(<IconIF>{name:"cross"});

    this.modalSv.$modalOpen.subscribe((m)=>{
      this.isModalOpen = m;
    })
  }

  public closeModal():void {
    this.modalSv.closeModal();
  }

}
