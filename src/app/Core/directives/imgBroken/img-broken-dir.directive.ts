import { Directive, ElementRef, HostListener } from '@angular/core';
import { IconSvService } from '../../services/icons/icon-sv.service';

@Directive({
  selector: '[appImgBrokenDir]',
  standalone: true
})
export class ImgBrokenDirDirective {

  constructor(private htmlEl:ElementRef,
    private iconSv:IconSvService
  ) { }

  @HostListener('error') brokenImg(){
    this.htmlEl.nativeElement.src = this.iconSv.getBrokenIcon();
  }

}
