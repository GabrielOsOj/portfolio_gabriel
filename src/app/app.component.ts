import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPageComponent } from "./Main/first-page/first-page.component";
import { SecondPageComponent } from "./Main/second-page/second-page.component";
import { ThirdPageComponent } from "./Main/third-page/third-page.component";
import { FourthPageComponent } from "./Main/fourth-page/fourth-page.component";
import { CommonModule } from '@angular/common';
import { NavbarMenuSvService } from './Core/services/navbar/navbar-menu-sv.service';
import { IconSvService } from './Core/services/icons/icon-sv.service';
import { IconIF } from './Core/models/icon-if';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstPageComponent, SecondPageComponent, ThirdPageComponent, FourthPageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit{
  title = 'portfolio-gabriel_ojeda';
  
  ArIsVisible:Array<boolean> = [true,false,false,false];

  isMenuOpen:boolean = false;
  icoArrowUp:string;

  @HostListener('window:scroll')
  private onScroll($event:Event):void {
    this.activateComponents(window.pageYOffset);
  };

  constructor(private element:ElementRef,
    private cdr:ChangeDetectorRef,
    private iconSv:IconSvService,
    private navbarSv:NavbarMenuSvService
  ){
    this.icoArrowUp = iconSv.getUtilityIcon(<IconIF>{name:"up_arrow"});
  }
 
  ngOnInit(): void {
    this.navbarSv.$menuOpen.subscribe(data => this.isMenuOpen = data);
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
  

  /* responsive */
  public fnExitMenu():void{
    this.navbarSv.closeMenu();
  }

}
