import QrCode from "../entities/QrCode";
import IDepositer from "./interfaces/IDepositer";

export default class GiftDepositer implements IDepositer {

    private _pixKey!: string;

    deposit(): void {
        throw new Error("Method not implemented.");
    }
    checkHashedPassword(qrcode: QrCode): boolean {
        throw new Error("Method not implemented.");
    }

}