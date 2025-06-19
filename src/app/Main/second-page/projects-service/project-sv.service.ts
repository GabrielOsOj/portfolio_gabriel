import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectIF } from '../projects-models/project-if';

import projectData from '../../../Core/mocks/projects-data.json';


@Injectable({
  providedIn: 'root'
})
export class ProjectSvService {


  constructor(private http:HttpClient) {}

  public getProjectList():Array<ProjectIF>{
  
    return projectData;
    
  }

}
