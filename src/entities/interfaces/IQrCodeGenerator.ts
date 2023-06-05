import IQrCode from "./IQrCode";

export default interface IQrCodeGenerator {
    generateQrCode(): IQrCode;
    setPassword(): void;
}