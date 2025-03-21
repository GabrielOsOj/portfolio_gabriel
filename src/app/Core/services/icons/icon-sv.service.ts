import { Injectable } from '@angular/core';
import { TecnologyIF } from '../../models/project-if';

@Injectable({
  providedIn: 'root'
})
export class IconSvService {

  constructor() { }

  public getIcon(icon:TecnologyIF):string{
    console.log(icon.name)
    return 'assets/svg/tecnologies/'+icon.name.toLocaleLowerCase()+".svg";
  }

  public getIconList(names:Array<TecnologyIF>):Array<string>{
    return names.map(iconName => this.getIcon(iconName));
  }

  public getBrokenIcon():string{
    return 'assets/svg/utils/forbidden.svg';
  }

}
