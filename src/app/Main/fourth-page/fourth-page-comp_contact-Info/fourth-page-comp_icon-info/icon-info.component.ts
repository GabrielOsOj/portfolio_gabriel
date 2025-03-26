import { Component, input } from '@angular/core';
import { ImgBrokenDirDirective } from '../../../../Core/directives/imgBroken/img-broken-dir.directive';

@Component({
  selector: 'app-icon-info',
  standalone: true,
  imports: [ImgBrokenDirDirective],
  templateUrl: './icon-info.component.html',
  styleUrl: './icon-info.component.css'
})
export class IconInfoComponent {

  iconUrl = input.required<string>();
  text = input.required<string>();
  emailField=input<boolean>(false);

}
