import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { IconSvService } from '../../Core/services/icons/icon-sv.service';
import { IconIF } from '../../Core/models/icon-if';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnChanges{

  menuIcon:string;
  upArrowIcon:string;
  mainIco:string;
  animationsActive = input<boolean>(true);

  menuOpen:boolean;

  constructor(private iconSv:IconSvService){
    this.menuIcon = iconSv.getUtilityIcon(<IconIF>{name:"menu"});
    this.upArrowIcon = iconSv.getUtilityIcon(<IconIF>{name:"up_arrow"});
    this.mainIco = iconSv.getMainIcon();
    this.menuOpen = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("aa")
  }

  public fnOpenMenu():void{
    this.menuOpen = true;
  }

  public fnExitMenu():void{
    this.menuOpen = false;
  }

}
