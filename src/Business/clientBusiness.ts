import { IIdGenerator } from "./ports";
import { ClientRepository } from "./repository";
import { CustomError } from "../Error/customError";
import { Client, ClientDTO } from "../Models/client";
export class ClientBusiness {
  constructor(
    private clientDatabase: ClientRepository,
    private idGenerator: IIdGenerator
  ) {}
  public createClient = async (input: ClientDTO): Promise<void> => {
    try {
      const { name } = input;
      const id = this.idGenerator.generateId();

      const newClient = new Client(id, name);

      await this.clientDatabase.createClient(newClient);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
