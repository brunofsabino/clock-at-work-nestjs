import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UsersRepository } from '../repositories/users-repository';

interface registeringPointUserRequest {
  name: string;
  registrationNumber: string;
  password: string;
  latitude: string;
  longitude: string;
  photoSelfie: string;
}
interface registeringPointUserResponse {
  user: User;
}

@Injectable()
export class registeringPointUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    request: registeringPointUserRequest,
  ): Promise<registeringPointUserResponse> {
    const {
      name,
      registrationNumber,
      password,
      latitude,
      longitude,
      photoSelfie,
    } = request;

    const user = new User({
      name,
      latitude,
      longitude,
      password,
      photoSelfie,
      registrationNumber,
    });

    await this.usersRepository.create(user);

    return {
      user,
    };
  }
}
