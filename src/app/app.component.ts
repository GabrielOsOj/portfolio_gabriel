import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPageComponent } from "./Main/first-page/first-page.component";
import { SecondPageComponent } from "./Main/second-page/second-page.component";
import { ThirdPageComponent } from "./Main/third-page/third-page.component";
import { FourthPageComponent } from "./Main/fourth-page/fourth-page.component";
import { CommonModule } from '@angular/common';
import { NavbarMenuSvService } from './Core/services/navbar/navbar-menu-sv.service';
import { IconSvService } from './Core/services/icons/icon-sv.service';
import { IconIF } from './Core/models/icon-if';
import { GoToSvService } from './Core/services/goTo/go-to-sv.service';
import { ProjectsModalComponent } from "./Main/second-page/projects-modal/projects-modal.component";
import { ProjectsModalService } from './Core/services/projectsModal/projects-modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstPageComponent, SecondPageComponent, ThirdPageComponent, FourthPageComponent, CommonModule, ProjectsModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'portfolio-gabriel_ojeda';
  
  ArIsVisible:Array<boolean> = [true,false,false,false];

  isMenuOpen:boolean = false;
  isProjectModalOpen = false;
  icoArrowUp:string;

  @ViewChild('presentation') presentation!:ElementRef;
  @ViewChild('tecnologies') tecnologies!:ElementRef;
  @ViewChild('contact') contact!:ElementRef;
  @ViewChild('projects') projects!:ElementRef;

  @HostListener('window:scroll')
  private onScroll($event:Event):void {
    this.activateComponents(window.pageYOffset);
  };

  constructor(private element:ElementRef,
    private cdr:ChangeDetectorRef,
    private iconSv:IconSvService,
    private navbarSv:NavbarMenuSvService,
    private goToSv: GoToSvService,
    private modalSv: ProjectsModalService
  ){
    this.icoArrowUp = iconSv.getUtilityIcon(<IconIF>{name:"up_arrow"});
  }

  ngAfterViewInit(): void {
    
  }
 
  ngOnInit(): void {
    this.navbarSv.$menuOpen.subscribe(data => this.isMenuOpen = data);
    this.goToSv.$goToSect.subscribe(data => this.goToSec(data));
    this.modalSv.$modalOpen.subscribe(data=> this.isProjectModalOpen=data)
  }

  public activateComponents(Yoffset:number){
    this.ArIsVisible[0] = true;

    if(Yoffset>600){
      this.ArIsVisible[1] = true;
      this.cdr.detectChanges()
    }
    if(Yoffset>1200){
      this.ArIsVisible[2] = true;
      this.cdr.detectChanges()
    }
    if(Yoffset>1800){
      this.ArIsVisible[3] = true;
      this.cdr.detectChanges()
    }
  }
  

  /* responsive */
  public fnExitMenu():void{
    this.navbarSv.closeMenu();
  }
  
  public goToSec(section:string){
  
    this.fnExitMenu();
    
    switch(section){
      case "presentation":
        this.presentation.nativeElement.scrollIntoView({behavior:"smooth"})
        break;
      case "contact":
        this.contact.nativeElement.scrollIntoView({behavior:"smooth"});
        break;
      case "projects":
        this.projects.nativeElement.scrollIntoView({behavior:"smooth"});
        break;
      case "tecnologies":
        this.tecnologies.nativeElement.scrollIntoView({behavior:"smooth"});
        break;
    }
    
  }

}
