import { CardRepository } from "../Business/repository";
import { BaseDatabase } from "./baseDatabase";
import { Card } from "./../Models/card";
export class CardDatabase extends BaseDatabase implements CardRepository {
  private static TABLE_NAME = `Card`;

  public createCard = async (card: Card): Promise<void> => {
    try {
      await CardDatabase.connection
        .insert({
          id: card.getId(),
          holder_name: card.getHolderName(),
          number: card.getNumberCard(),
          expiration_date: card.getExpirationDate(),
          cvv: card.getCvv(),
          payment_id: card.getPaymentId(),
        })
        .into(CardDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
