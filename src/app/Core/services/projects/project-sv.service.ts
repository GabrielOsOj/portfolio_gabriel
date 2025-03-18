import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectIF } from '../../models/project-if';

import * as projectData from '../../mocks/projects-data.json';


@Injectable({
  providedIn: 'root'
})
export class ProjectSvService {


  constructor(private http:HttpClient) {}

  public getProjectList():Array<ProjectIF>{
    return projectData;
  }

}
