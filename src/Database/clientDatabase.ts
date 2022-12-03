import { ClientRepository } from '../Business/repository';
import { Client } from './../Models/client';
import { BaseDatabase } from './baseDatabase';

export class ClientDatabase extends BaseDatabase implements ClientRepository{
    private static TABLE_NAME = `Client`
    
    public createClient = async(client: Client):Promise<void> => {
       try {
        await ClientDatabase.connection.insert({
            id: client.getId(),
            name: client.getName()
        }).into(ClientDatabase.TABLE_NAME)
       } catch (error:any) {
        throw new Error(error.sqlMessage || error.message)
       }
    }
}