import { IconIF } from "../../../Core/models/icon-if";

export interface ProjectIF {

    title:string,
    description:string,
    tecnologies:Array<IconIF>,
    image?: string

}