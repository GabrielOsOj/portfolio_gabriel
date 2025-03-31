import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IconSvService } from '../../Core/services/icons/icon-sv.service';
import { IconIF } from '../../Core/models/icon-if';
import { CommonModule } from '@angular/common';
import { NavbarMenuSvService } from '../../Core/services/navbar/navbar-menu-sv.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  menuIcon:string;
  upArrowIcon:string;
  mainIco:string;
  animationsActive = input<boolean>(true);

  menuOpen:boolean = false;

  constructor(private iconSv:IconSvService,
    private navbarSv:NavbarMenuSvService
  ){
    this.menuIcon = iconSv.getUtilityIcon(<IconIF>{name:"menu"});
    this.upArrowIcon = iconSv.getUtilityIcon(<IconIF>{name:"up_arrow"});
    this.mainIco = iconSv.getMainIcon();
    
  }

  ngOnInit(): void {
    this.navbarSv.$menuOpen.subscribe(data => this.menuOpen = data)
  }

  public fnOpenMenu():void{
    this.navbarSv.openMenu()
    // this.menuOpen = true;
  }

}
