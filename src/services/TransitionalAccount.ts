import Account from '../entities/Account';

export default class TransitionalAccount extends Account {
  private static instance: TransitionalAccount;

  private constructor(id: number, number: number, agency: string, balance: number) {
    super(id, number, agency, balance);
    // TransitionalAccount initialization logic
  }

  get accountId(): number {
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
  }

  get accountBalance(): number {
    return this.balance;
  }

  public static getInstance(): TransitionalAccount {
    if (!TransitionalAccount.instance) {
      TransitionalAccount.instance = new TransitionalAccount(1, 1234, '12345', 0);
    }
    return TransitionalAccount.instance;
  }
}

