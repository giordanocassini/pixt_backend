import IQrCode from "../entities/interfaces/PixtCard";
import PixtCardGenerator from "./interfaces/PixtCardGenerator";

export default class QrCodeGenerator implements PixtCardGenerator {
    generatePixtCard(): IQrCode {
        throw new Error("Method not implemented.");
    }
    setPassword(): void {
        throw new Error("Method not implemented.");
    }

}