import { Injectable } from '@angular/core';
import { TecnologyIF } from '../../models/project-if';

@Injectable({
  providedIn: 'root'
})
export class IconSvService {

  constructor() { }

  public getIcon(name:String):string{

    console.log(name);
    return 'assets/tecnologies/'+name.toLocaleLowerCase()+".svg";

  }

  public getIconList(names:Array<TecnologyIF>):Array<string>{
    return names.map(name => this.getIcon(name.name));
  }

}
