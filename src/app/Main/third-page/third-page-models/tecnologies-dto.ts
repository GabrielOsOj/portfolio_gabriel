import { IconIF } from "../../../Core/models/icon-if";

export interface TecnologiesDTO {

    title:string,
    icons:Array<string>,
    titlePosition: Positions

}

enum Positions{
    Left,
    Right,
    Center
}