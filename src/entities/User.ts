import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Account from './Account'
import QrCode from './QrCode';


export class User {

  private _id!: number;
  private _name!: string;
  private _email!: string;
  private _hashedPassword!: string;
  private _qrCodes!: QrCode[];
  private _accounts!: Account[];

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get hashedPassword(): string {
    return this._hashedPassword;
  }

  public set hashedPassword(value: string) {
    this._hashedPassword = value;
  }

  public get accounts(): Account[] {
    return this._accounts;
  }

  public set accounts(value: Account[]) {
    this._accounts = value;
  }

  public get qrCodes(): QrCode[] {
    return this._qrCodes;
  }

  public set qrCodes(value: QrCode[]) {
    this._qrCodes = value;
  }
}
