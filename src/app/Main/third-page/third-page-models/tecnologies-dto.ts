import { IconIF } from "../../../Core/models/icon-if";

export interface TecnologiesDTO {

    title:string,
    icons:Array<string>,
    iconsName: Array<string>,
    titlePosition: Positions

}

export enum Positions{
    Left = "Left",
    Right = "Right",
    Center = "Center"
}