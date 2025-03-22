import { Injectable } from '@angular/core';

import tecnoDataDTO from '../../../Core/mocks/about-me-data/tecnologies-data.json'
import { TecnCompDTO } from '../third-page-dto/tecn-comp-dto';

@Injectable({
  providedIn: 'root'
})
export class TecnologiesSvService {

  constructor() { }

  public getTecnologiesData():Array<TecnCompDTO>{
    return tecnoDataDTO;
  }

}
