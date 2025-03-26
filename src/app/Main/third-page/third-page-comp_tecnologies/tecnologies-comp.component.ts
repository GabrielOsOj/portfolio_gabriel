import { Component, input, OnInit } from '@angular/core';
import { IconIF } from '../../../Core/models/icon-if';
import { TecnologiesDTO } from '../third-page-models/tecnologies-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnologies-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecnologies-comp.component.html',
  styleUrl: './tecnologies-comp.component.css'
})
export class TecnologiesCompComponent implements OnInit{

  
  tecnDto = input.required<TecnologiesDTO>()

  ngOnInit(): void {
    console.log(this.tecnDto().titlePosition);
  }

}
