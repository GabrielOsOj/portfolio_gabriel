import { Component, input } from '@angular/core';
import { ProjectIF } from '../../../Core/models/project-if';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProyectCardComponent {

  projectData = input.required<ProjectIF>()

}
