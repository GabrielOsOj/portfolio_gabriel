import { Component, input } from '@angular/core';
import { IconIF } from '../../../Core/models/icon-if';
import { TecnologiesDTO } from '../third-page-models/tecnologies-dto';

@Component({
  selector: 'app-tecnologies-comp',
  standalone: true,
  imports: [],
  templateUrl: './tecnologies-comp.component.html',
  styleUrl: './tecnologies-comp.component.css'
})
export class TecnologiesCompComponent {

  
  tecnDto = input.required<TecnologiesDTO>()


}
