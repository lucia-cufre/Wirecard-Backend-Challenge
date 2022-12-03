export class Card{
    constructor(
        private id:string,
        private holder_name: string,
        private number: number,
        private expiration_date: Date,
        private cvv: number,
        private payment_id: string,
    ){}

    getId(){
        return this.id
    }

    getHolderName(){
        return this.holder_name
    }

    getNumberCard(){
        return this.number
    }

    getExpirationDate(){
        return this.expiration_date
    }

    getCvv(){
        return this.cvv
    }

    getPaymentId(){
        return this.payment_id
    }
}

export interface CardDTO{
    holderName: string,
    cardNumber: number,
    expirationDate: Date,
    cardCvv: number
}