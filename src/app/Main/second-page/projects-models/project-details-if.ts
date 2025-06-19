import { IconIF } from "../../../Core/models/icon-if";

export interface ProjectDetailsIF{
    title:String,
    description:String,
    images: Array<String>,
    technologies: {
        frontend: Array<String>,
        backend: Array<String>,
        utils: Array<String>,
        otherTechs : Array<String>
    },
    deployed:Boolean,
    github: String,
    live: String,
}

