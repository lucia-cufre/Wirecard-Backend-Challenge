export class Client{
    constructor(
        private id:string,
        private name: string
    ){}

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }
}

export interface ClientDTO{
    name: string
}