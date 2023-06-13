import { Request } from 'express';
import PixtCardGenerator from '../services/interfaces/PixtCardGenerator';
import QrCodeGenerator from '../services/QrCodegenerator';
import TranstionalAccountDepositer from '../services/TransitionalAccountDepositer';
import IDepositer from '../services/interfaces/IDepositer';

export class PixtCardController {
  static async createPixtCard(req: Request, res: Response) {
    const { amountOfMoney, password, cashBackAccount_id } = req.body;
    const depositer: IDepositer = new TranstionalAccountDepositer();
    try {
      await depositer.deposit(amountOfMoney);
      const generator: PixtCardGenerator = new QrCodeGenerator();
      return res.status(200).send(generator.generatePixtCard(amountOfMoney, password, cashBackAccount_id, req.user.id)));
    } catch (error) {}
  }
}
