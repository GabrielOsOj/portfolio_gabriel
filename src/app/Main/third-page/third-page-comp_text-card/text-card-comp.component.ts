import { Component, input } from '@angular/core';
import { TextBoxIf } from '../third-page-models/text-box-if';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-card-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-card-comp.component.html',
  styleUrl: './text-card-comp.component.css'
})
export class TextCardCompComponent {


  textBoxData = input.required<TextBoxIf>()
  toRight = input<boolean>(false);

}
