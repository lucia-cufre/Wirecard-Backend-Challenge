import { CardDTO } from "./../Models/card";
import { PaymentDTO } from "./../Models/payment";
import { BuyerDTO } from "./../Models/buyer";
import { Request, Response } from "express";
import { PaymentBusiness } from "../Business/paymentBusiness";

export class PaymentController {
  constructor(private paymentBusiness: PaymentBusiness) {}

  public async createPayment(req: Request, res: Response): Promise<void> {
    try {
      const clientId = req.params.id;
      const { name, email, cpf, amount, type } = req.body;
      const { holderName, cardNumber, expirationDate, cardCvv } =
        req?.body || undefined;
      const buyer: BuyerDTO = {
        name,
        email,
        cpf,
      };

      const payment: PaymentDTO = {
        amount,
        type,
      };

      const card: CardDTO = {
        holderName,
        cardNumber,
        expirationDate,
        cardCvv,
      };

      await this.paymentBusiness.createPayment(clientId, buyer, payment, card);
      res.status(201).send({message: "Payment done."})
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  }
}
