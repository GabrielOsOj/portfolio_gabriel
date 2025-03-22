import { Injectable } from '@angular/core';
import { IconIF } from '../../models/icon-if';

@Injectable({
  providedIn: 'root'
})
export class IconSvService {

  constructor() { }

  public getIcon(icon:IconIF):string{
    return 'assets/svg/tecnologies/'+icon.name.toLocaleLowerCase()+".svg";
  }

  public getIconList(names:Array<IconIF>):Array<string>{
    return names.map(iconName => this.getIcon(iconName));
  }

  public getBrokenIcon():string{
    return 'assets/svg/utils/forbidden.svg';
  }

}
