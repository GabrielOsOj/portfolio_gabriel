import { IconIF } from "../../../Core/models/icon-if";

export interface TecnCompDTO {

    title:string,
    icons:Array<IconIF>,
    titlePosition: Positions

}

enum Positions{
    Left,
    Right,
    Center
}