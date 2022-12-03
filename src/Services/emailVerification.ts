import { IEmailValidation } from './../Business/ports';


 export class EmailValidation implements IEmailValidation{

    public regexEmail = () => { return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;} 
}