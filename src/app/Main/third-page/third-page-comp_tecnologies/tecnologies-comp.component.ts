import { Component, input } from '@angular/core';
import { IconIF } from '../../../Core/models/icon-if';
import { TecnCompDTO } from '../third-page-dto/tecn-comp-dto';

@Component({
  selector: 'app-tecnologies-comp',
  standalone: true,
  imports: [],
  templateUrl: './tecnologies-comp.component.html',
  styleUrl: './tecnologies-comp.component.css'
})
export class TecnologiesCompComponent {

  
  tecnDto = input.required<TecnCompDTO>()


}
