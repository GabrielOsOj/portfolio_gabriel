import { Component, input, OnInit } from '@angular/core';
import { ProjectIF } from '../../../Core/models/project-if';
import { IconSvService } from '../../../Core/services/icons/icon-sv.service';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProyectCardComponent implements OnInit{

  projectData = input.required<ProjectIF>()

  iconsUrls?:Array<string>;

  public constructor(private iconSv:IconSvService){
  }

  ngOnInit(): void {
    this.iconsUrls = this.iconSv.getIconList(this.projectData().tecnologies);
  }

}
