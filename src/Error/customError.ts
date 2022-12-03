export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
      super(message);
    }
  }

  export class MissingInformation extends CustomError{
    constructor() {
      super(422, "Is missing required information.");
    }
  }

  export class InvalidType extends CustomError{
    constructor() {
      super(422, "Type must be Credit Card or Boleto");
    }
  }

  export class InvalidEmail extends CustomError{
    constructor(){
        super(422, "The email must be valid")
    }
}