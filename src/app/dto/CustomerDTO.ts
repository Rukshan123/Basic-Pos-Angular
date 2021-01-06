export default class CustomerDTO {
  private _customerID: string;
  private _customerName: string;
  private _customerAddress: string;
  private _customerSalary: number;


  constructor(customerID: string, customerName: string, customerAddress: string, customerSalary: number) {
    this._customerID = customerID;
    this._customerName = customerName;
    this._customerAddress = customerAddress;
    this._customerSalary = customerSalary;

  }

  get customerID(): string {
    return this._customerID;
  }

  set customerID(value: string) {
    this._customerID = value;
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
  }

  get customerAddress(): string {
    return this._customerAddress;
  }

  set customerAddress(value: string) {
    this._customerAddress = value;
  }

  get customerSalary(): number {
    return this._customerSalary;
  }

  set customerSalary(value: number) {
    this._customerSalary = value;
  }
}
