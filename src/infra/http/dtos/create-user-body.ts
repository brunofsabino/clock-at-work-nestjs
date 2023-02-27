import { IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  //@IsUUID()
  name: string;

  @IsNotEmpty()
  registrationNumber: string;

  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  latitude: string;
  @IsNotEmpty()
  longitude: string;
  @IsNotEmpty()
  photoSelfie: string;
}
