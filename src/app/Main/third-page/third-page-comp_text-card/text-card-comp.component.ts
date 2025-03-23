import { Component, input, Input } from '@angular/core';
import { TextBoxIf } from '../third-page-models/text-box-if';

@Component({
  selector: 'app-text-card-comp',
  standalone: true,
  imports: [],
  templateUrl: './text-card-comp.component.html',
  styleUrl: './text-card-comp.component.css'
})
export class TextCardCompComponent {


  textBoxData=input.required<TextBoxIf>()

}
