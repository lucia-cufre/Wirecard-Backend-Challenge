import { Buyer } from './../Models/buyer';
import { BuyerRepository } from '../Business/repository';
import { BaseDatabase } from './baseDatabase';
export class BuyerDatabase extends BaseDatabase implements BuyerRepository{
    private static TABLE_NAME = `Buyer`
    
    public createBuyer = async(buyer: Buyer):Promise<void> => {
       try {
        await BuyerDatabase.connection.insert({
            id: buyer.getId(),
            name: buyer.getName(),
            email: buyer.getEmail(),
            cpf: buyer.getCpf()
        }).into(BuyerDatabase.TABLE_NAME)
       } catch (error:any) {
        throw new Error(error.sqlMessage || error.message)
       }
    }
}