import { Buyer } from '../Models/buyer';
import { Card } from '../Models/card';
import { Payment} from '../Models/payment';
import { Client } from '../Models/client';
export interface ClientRepository{
    createClient(client:Client):Promise<void>
}

export interface PaymentRepository{
    createPayment(pay:Payment):Promise<void>
}

export interface BuyerRepository{
    createBuyer(buyer:Buyer):Promise<void>
}

export interface CardRepository{
    createCard(card:Card):Promise<void>
}

