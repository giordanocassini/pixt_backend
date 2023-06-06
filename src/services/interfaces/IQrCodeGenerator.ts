import IQrCode from "../../entities/interfaces/IQrCode";

export default interface IQrCodeGenerator {
    generateQrCode(): IQrCode;
    setPassword(): void;
}