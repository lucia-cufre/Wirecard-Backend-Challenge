import { ClientDTO } from "./../Models/client";
import { Request, Response } from "express";
import { ClientBusiness } from "./../Business/clientBusiness";
export class ClientController {
  constructor(private clientBusiness: ClientBusiness) {}

  public createClient = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;

      const newClient: ClientDTO = {
        name,
      };

      await this.clientBusiness.createClient(newClient);

      res.status(201).send({message: "Cliente criado."})
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}
