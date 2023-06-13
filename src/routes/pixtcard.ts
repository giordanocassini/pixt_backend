import { checkJwt } from '../middlewares/checkJwt';
import { Router } from 'express';
import { PixtCardController } from '../controllers/PixtCardController';

const router = Router();

router.route('/pixtcard').post([checkJwt], PixtCardController.createPixtCard);

router.get('/pixtcard/:PixtCard([0-9]+)', [checkJwt], PixtCardController.getPixtCardbyId);

export default router;
