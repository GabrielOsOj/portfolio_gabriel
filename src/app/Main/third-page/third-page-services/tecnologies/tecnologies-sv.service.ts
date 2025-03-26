import { Injectable } from '@angular/core';

import tecnoDataDTO from '../../../../Core/mocks/about-me-data/tecnologies-data.json'
import { TecnologiesIF } from '../../third-page-models/tecnologies-if';

@Injectable({
  providedIn: 'root'
})
export class TecnologiesSvService {

  constructor() { }

  public getTecnologiesData():Array<TecnologiesIF>{
    return tecnoDataDTO;
  }

}
