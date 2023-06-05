import QrCode from "../QrCode";

export default interface IDepositer {
    deposit(amountOfMoney: number): void;
//  checkHashedPword(qrcode: QrCode): boolean;
}