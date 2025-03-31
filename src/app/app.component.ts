import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPageComponent } from "./Main/first-page/first-page.component";
import { SecondPageComponent } from "./Main/second-page/second-page.component";
import { ThirdPageComponent } from "./Main/third-page/third-page.component";
import { FourthPageComponent } from "./Main/fourth-page/fourth-page.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstPageComponent, SecondPageComponent, ThirdPageComponent, FourthPageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent{
  title = 'portfolio-gabriel_ojeda';
  
  ArIsVisible:Array<boolean> = [true,false,false,false]

  @HostListener('window:scroll')
  private onScroll($event:Event):void {
    this.activateComponents(window.pageYOffset)
    console.log(window.pageYOffset)
    
  };

  constructor(private element:ElementRef,
    private cdr:ChangeDetectorRef
  ){

  }
 
  public activateComponents(Yoffset:number){
    this.ArIsVisible[0] = true;
    if(Yoffset>650){
      this.ArIsVisible[1] = true;
      this.cdr.detectChanges()
    }
    if(Yoffset>1300){
      this.ArIsVisible[2] = true;
      this.cdr.detectChanges()
    }
    if(Yoffset>1900){
      this.ArIsVisible[3] = true;
      this.cdr.detectChanges()
    }
  }
  
}
