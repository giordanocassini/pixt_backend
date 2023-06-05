import Account from "./Account";

class TransitionalAccount extends Account {
  private static instance: TransitionalAccount;

  private constructor(id: number, number: number, agency: string) {
    super(id, number, agency);
    // TransitionalAccount initialization logic
  }

  /* get accountId(): number {
    return this.id;
  }

  // Getter and setter for the number property
  get accountNumber(): number {
    return this.number;
  }

  set accountNumber(value: number) {
    this.number = value;
  }

  // Getter and setter for the agency property
  get accountAgency(): string {
    return this.agency;
  }

  set accountAgency(value: string) {
    this.agency = value;
  } */

  public static getInstance(): TransitionalAccount {
    if (!TransitionalAccount.instance) {
      TransitionalAccount.instance = new TransitionalAccount(1, 1234, "12345");
    }
    return TransitionalAccount.instance;
  }
}

export default TransitionalAccount;
