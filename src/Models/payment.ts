export class Payment {
  constructor(
    private id: string,
    private amount: number,
    private type: PAYMENT_TYPE,
    private client_id: string,
    private buyer_id: string
  ) {}

  getId() {
    return this.id;
  }

  getAmount() {
    return this.amount;
  }

  getType(): PAYMENT_TYPE {
    return this.type;
  }

  getClientId() {
    return this.client_id;
  }

  getBuyerId() {
    return this.buyer_id;
  }
}

export enum PAYMENT_TYPE {
    CreditCard = "CreditCard",
    Boleto = "Boleto"
 }

 export interface PaymentDTO{
    amount: number,
    type: PAYMENT_TYPE,
}