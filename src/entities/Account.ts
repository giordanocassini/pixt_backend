export default class Account {
  constructor(
    protected id: number,
    protected number: number,
    protected agency: string,
    protected balance: number
  ) {}

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
}
