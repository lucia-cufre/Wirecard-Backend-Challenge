import { CardDatabase } from "./../Database/cardDatabase";
import { BuyerDatabase } from "./../Database/buyerDatabase";
import { EmailValidation } from "./../Services/emailVerification";
import express from "express";
import { PaymentBusiness } from "../Business/paymentBusiness";
import { PaymentController } from "../Controller/paymentController";
import { PaymentDatabase } from "../Database/paymentDatabase";
import { IdGenerator } from "../Services/idGenerator";

export const paymentRouter = express.Router();

const idGenerator = new IdGenerator();
const emailValidation = new EmailValidation();
const buyerDatabase = new BuyerDatabase();
const cardDatabase = new CardDatabase();
const paymentDatabase = new PaymentDatabase();
const paymentBusiness = new PaymentBusiness(
  buyerDatabase,
  cardDatabase,
  paymentDatabase,
  idGenerator,
  emailValidation
);
const paymentController = new PaymentController(paymentBusiness);

paymentRouter.post("/:id", (req, res) =>
  paymentController.createPayment(req, res)
);
