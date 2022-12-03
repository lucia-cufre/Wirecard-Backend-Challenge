import {
  CustomError,
  InvalidEmail,
  InvalidType,
  MissingInformation,
} from "../Error/customError";
import { Card, CardDTO } from "../Models/card";
import { Payment, PaymentDTO, PAYMENT_TYPE } from "../Models/payment";
import { Buyer, BuyerDTO } from "../Models/buyer";
import { ClientDTO } from "../Models/client";
import { IEmailValidation, IIdGenerator } from "./ports";
import {
  BuyerRepository,
  CardRepository,
  PaymentRepository,
} from "./repository";
export class PaymentBusiness {
  constructor(
    private buyerDataBase: BuyerRepository,
    private cardDatabase: CardRepository,
    private paymentDatabase: PaymentRepository,
    private idGenerator: IIdGenerator,
    private emailValidation: IEmailValidation
  ) {}

  public async createPayment(
    id: string,
    buyer: BuyerDTO,
    payment: PaymentDTO,
    card?: CardDTO
  ) {
    try {
      const clientId = id;
      const { name, email, cpf } = buyer;
      let { amount, type } = payment;

      if (!id || !name || !email || !cpf || !amount || !type) {
        throw new MissingInformation();
      }
      if (type !== "CreditCard" && type !== "Boleto") {
        throw new InvalidType();
      }

      const validEmail = this.emailValidation.regexEmail();
      if (validEmail.test(email) !== true) {
        throw new InvalidEmail();
      }

      const generateId: string = this.idGenerator.generateId();

      const newBuyer: Buyer = new Buyer(generateId, name, email, cpf);
      await this.buyerDataBase.createBuyer(newBuyer);

      const newPayment: Payment = new Payment(
        generateId,
        amount,
        PAYMENT_TYPE[type as keyof typeof PAYMENT_TYPE],
        clientId,
        newBuyer.getId()
      );
      await this.paymentDatabase.createPayment(newPayment);

      if (newPayment.getType() === PAYMENT_TYPE.Boleto) {
        const boletoNumber = this.idGenerator.generateId();
        return `This is the boleto number for your payment: ${boletoNumber}`;
      } else if (newPayment.getType() === PAYMENT_TYPE.CreditCard) {
        if (!card) {
          throw new Error("Card information must be filed.");
        }
        const { holderName, cardNumber, expirationDate, cardCvv } = card;
        const newCard: Card = new Card(
          generateId,
          holderName,
          cardNumber,
          expirationDate,
          cardCvv,
          newPayment.getId()
        );
        await this.cardDatabase.createCard(newCard);
      }
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
}
