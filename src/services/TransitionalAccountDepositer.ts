import { PixtCardController } from '../controllers/PixtCardController';
import IDepositer from './interfaces/IDepositer';
import TransitionalAccount from './TransitionalAccount';
import { Request, Response } from 'express';

export default class TranstionalAccountDepositer implements IDepositer {
  async deposit(amountOfMoney: number): Promise<void> {
    try {
      // paypal api logic
      console.log(
        `Depositada a quantia de R$${amountOfMoney} na conta ${TransitionalAccount.getInstance().accountNumber} da agencia ${
          TransitionalAccount.getInstance().accountAgency
        }`,
      );
    } catch (error) {}
  }

  static checkDeposit(amountOfMoney: number, actualBalance: number, pixtCard_id: number): void {
    // won't work if two or more deposit occur at same time
    while (!(amountOfMoney + actualBalance == TransitionalAccount.getInstance().accountBalance)) {
      this.checkDeposit(amountOfMoney, actualBalance, pixtCard_id);
    }
    PixtCardController.editPixtCard();
  }

  static async provideDepositCode(req: Request, res: Response) {
    const { amountOfMoney } = req.body;
    const code = 'standardCode'; // this will change
    try {
      // paypal api logic
      const pixtCard_id = req.res?.locals.pixtCard_id;
      const user = req.user;
      this.checkDeposit(amountOfMoney, TransitionalAccount.getInstance().accountBalance, pixtCard_id);
      res.status(200).send(code);
    } catch (error) {}
  }
}
