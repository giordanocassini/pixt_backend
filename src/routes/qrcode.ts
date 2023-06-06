import { checkJwt } from "./../middlewares/checkJwt";
import { Router } from "express";

const router = Router();

router
  .route("/qrcode")
  .post([checkJwt], QrCodeController.createQrCode)