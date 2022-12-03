export class Buyer{
    constructor(
        private id:string,
        private name: string,
        private email: string,
        private cpf: string
    ){}

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getCpf(){
        return this.cpf
    }
}

export interface BuyerDTO{
    name: string,
    email: string,
    cpf: string
}