import { ClientController } from './../Controller/clientController';
import { ClientDatabase } from './../Database/clientDatabase';
import { IdGenerator } from './../Services/idGenerator';
import express from "express";
import { ClientBusiness } from '../Business/clientBusiness';

export const clientRouter = express.Router();

const idGenerator = new IdGenerator()
const clientDatabase = new ClientDatabase();
const clientBusiness = new ClientBusiness(clientDatabase, idGenerator);
const clientController = new ClientController(clientBusiness)

clientRouter.post("/", (req, res) => clientController.createClient(req, res));
