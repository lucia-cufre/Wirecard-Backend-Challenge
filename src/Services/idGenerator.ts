import { IIdGenerator } from './../Business/ports';
import { v4 } from "uuid";

export class IdGenerator implements IIdGenerator{

    public generateId = () => v4() 
}