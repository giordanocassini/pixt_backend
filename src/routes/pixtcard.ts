import { checkJwt } from '../middlewares/checkJwt';
import { Router } from 'express';
import { PixtCardController } from '../controllers/PixtCardController';
import TranstionalAccountDepositer from '../services/TransitionalAccountDepositer';

const router = Router();

router.route('/pixtcard').post([checkJwt], PixtCardController.createPixtCard, TranstionalAccountDepositer.provideDepositCode);

router.get('/pixtcard/:PixtCard([0-9]+)', [checkJwt], PixtCardController.getPixtCardbyId);

export default router;
