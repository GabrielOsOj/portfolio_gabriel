import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectIF } from '../../models/project-if';

import projectData from '../../mocks/projects-data.json';


@Injectable({
  providedIn: 'root'
})
export class ProjectSvService {


  constructor(private http:HttpClient) {}

  public getProjectList():Array<ProjectIF>{
    console.log(projectData);
    return projectData;
  }

}
