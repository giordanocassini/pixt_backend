import { NextFunction, Request, Response } from 'express';
import PixtCardGenerator from '../services/interfaces/PixtCardGenerator';
import QrCodeGenerator from '../services/QrCodegenerator';

export class PixtCardController {
  static async createPixtCard(req: Request, res: Response, next: NextFunction) {
    const { amountOfMoney, hashedPassword, cashBackAccount_id } = req.body; // this might not come on body after validation middleware
    const user = req.user; //chatgpt diz q dá pq checkJwt passa esse parametro
    try {
      const generator: PixtCardGenerator = new QrCodeGenerator();
      // bd logic
      res.locals.pixtCard_id = 'some number' // change after bd logic implemented
      next();
    } catch (error) {}
  }

  static async getPixtCardbyId(){

  }
  static async editPixtCard(pixtCard_id: number){

  }
}
