import IDepositer from "./interfaces/IDepositer";
import TransitionalAccount from "./TransitionalAccount";

export default class TranstionalAccountDepositer implements IDepositer {
  async deposit(amountOfMoney: number): Promise<void> {
    try {
      // await -> paypal api logic
      console.log(
        `Depositada a quantia de R$${amountOfMoney} na conta ${
          TransitionalAccount.getInstance().accountNumber
        } da agencia ${TransitionalAccount.getInstance().accountAgency}`
      );
       
    } catch (error) {}
  }
}
