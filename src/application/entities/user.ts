import { randomUUID } from 'node:crypto';

/* eslint-disable prettier/prettier */
export interface UserProps {
  name: string;
  registrationNumber: string;
  password: string;
  latitude: string;
  longitude: string;
  photoSelfie: string;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps) {
    this._id = randomUUID();
    this.props = props;
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set registrationNumber(registrationNumber: string) {
    this.props.registrationNumber = registrationNumber;
  }

  public get registrationNumber(): string {
    return this.props.registrationNumber;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public set latitude(latitude: string) {
    this.props.latitude = latitude;
  }

  public get latitude(): string {
    return this.props.latitude;
  }

  public set longitude(longitude: string) {
    this.props.longitude = longitude;
  }

  public get longitude(): string {
    return this.props.longitude;
  }

  public set photoSelfie(photoSelfie: string) {
    this.props.photoSelfie = photoSelfie;
  }

  public get photoSelfie(): string {
    return this.props.photoSelfie;
  }
}

const user = new User({
  name: 'string',
  registrationNumber: 'string',
  password: 'string',
  latitude: 'string',
  longitude: 'string',
  photoSelfie: 'string',
});
