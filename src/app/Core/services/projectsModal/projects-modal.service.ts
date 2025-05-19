import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectIF } from '../../../Main/second-page/projects-models/project-if';

@Injectable({
  providedIn: 'root'
})
export class ProjectsModalService {

  private isModalOpen = new BehaviorSubject<boolean>(false);
  private project = new BehaviorSubject<ProjectIF>({} as ProjectIF);

  public $modalOpen = this.isModalOpen.asObservable();
  public $projectData = this.project.asObservable();
  
  constructor() { }

  public openModal() {
    this.isModalOpen.next(true);
  }

  public closeModal() {
    this.isModalOpen.next(false);
  }

  public loadProjectData(){
    
  }

}
