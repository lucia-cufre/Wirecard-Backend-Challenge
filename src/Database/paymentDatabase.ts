import { Payment } from './../Models/payment';
import { PaymentRepository } from '../Business/repository';
import { BaseDatabase } from './baseDatabase';

export class PaymentDatabase extends BaseDatabase implements PaymentRepository{
    public static TABLE_NAME = "Payment"
    public async createPayment(payment:Payment):Promise<void>{
        try {
            await PaymentDatabase.connection.insert({
                id: payment.getId(),
                amount: payment.getAmount(),
                type: payment.getType(),
                client_id: payment.getClientId(),
                buyer_id: payment.getBuyerId()
            }).into(PaymentDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}