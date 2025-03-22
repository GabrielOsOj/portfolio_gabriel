import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProjectIF } from '../../../Core/models/icon-if';
import { IconSvService } from '../../../Core/services/icons/icon-sv.service';
import { ImgBrokenDirDirective } from '../../../Core/directives/imgBroken/img-broken-dir.directive';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [ImgBrokenDirDirective],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProyectCardComponent implements OnChanges{

  projectData = input.required<ProjectIF>()

  iconsUrls?:Array<string>;

  public constructor(private iconSv:IconSvService){
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.iconsUrls = this.iconSv.getIconList(this.projectData().tecnologies);
  }

}
