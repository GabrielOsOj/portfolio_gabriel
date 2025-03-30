import { Injectable } from '@angular/core';
import { IconIF } from '../../models/icon-if';

@Injectable({
  providedIn: 'root'
})
export class IconSvService {

  constructor() { }

  public getTecnoIcon(icon:IconIF):string{
    return 'assets/svg/tecnologies/'+icon.name.toLocaleLowerCase()+".svg";
  }

  public getTecnoIconList(names:Array<IconIF>):Array<string>{
    return names.map(iconName => this.getTecnoIcon(iconName));
  }

  public getUtilityIcon(icon:IconIF):string{
    return 'assets/svg/utils/'+icon.name+".svg";
  }

  public getMainIcon():string{
    return "/god_icon.png";
  }

  public getBrokenIcon():string{
    return 'assets/svg/utils/forbidden.svg';
  }

}
