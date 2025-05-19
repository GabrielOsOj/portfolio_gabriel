import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProjectIF } from '../projects-models/project-if';
import { IconSvService } from '../../../Core/services/icons/icon-sv.service';
import { ImgBrokenDirDirective } from '../../../Core/directives/imgBroken/img-broken-dir.directive';
import { ProjectsModalService } from '../../../Core/services/projectsModal/projects-modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [ImgBrokenDirDirective,CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProyectCardComponent implements OnChanges{

  projectData = input.required<ProjectIF>()
  isCenterProject = input<Boolean>(false);

  iconsUrls?:Array<string>;

  public constructor(private iconSv:IconSvService,
    private modalSv:ProjectsModalService
  ){
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.iconsUrls = this.iconSv.getTecnoIconList(this.projectData().tecnologies);
  }

  public openModal():void{
    this.modalSv.openModal()
  }

}
