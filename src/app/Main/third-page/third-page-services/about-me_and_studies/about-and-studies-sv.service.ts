import { Injectable } from '@angular/core';
import { TextBoxIf } from '../../third-page-models/text-box-if';

import aboutMe from '../../../../Core/mocks/about-me-data/about-me-data.json'
import studies from '../../../../Core/mocks/about-me-data/studies-data.json' 

@Injectable({
  providedIn: 'root'
})
export class AboutAndStudiesSvService {

  constructor() { }


  public getAboutMe():TextBoxIf{
    return aboutMe;
  };

  public getStudies():TextBoxIf{
    return studies;
  };


}
