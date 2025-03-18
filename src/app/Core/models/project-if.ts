export interface ProjectIF {

    title:string,
    description:string,
    tecnologies:Array<TecnologyIF>,
    image?: string

}

export interface TecnologyIF {
    name:String
}