import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectIF } from '../../../Main/second-page/projects-models/project-if';
import { HttpClient } from '@angular/common/http';
import { ProjectDetailsIF } from '../../../Main/second-page/projects-models/project-details-if';

@Injectable({
  providedIn: 'root'
})
export class ProjectsModalService {

  private isModalOpen = new BehaviorSubject<boolean>(false);
  private project = new BehaviorSubject<ProjectDetailsIF>({} as ProjectDetailsIF);

  public $modalOpen = this.isModalOpen.asObservable();
  public $projectData = this.project.asObservable();
  
  constructor(private http:HttpClient) { }

  public openModal() {
    this.isModalOpen.next(true);
  }

  public closeModal() {
    this.isModalOpen.next(false);
  }

  public loadProjectData(projectData:ProjectIF){
    this.http.get(projectData.detailsUrl).subscribe((resp)=>{
      this.project.next(resp as ProjectDetailsIF);
    })
 
  }

}
