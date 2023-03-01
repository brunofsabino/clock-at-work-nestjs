import { Controller, Body, Post } from '@nestjs/common';
import { registeringPointUser } from '@application/use-cases/registeringPointUser';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('users')
export class UsersController {
  constructor(private createUser: registeringPointUser) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const {
      latitude,
      longitude,
      name,
      password,
      registrationNumber,
      photoSelfie,
    } = body;

    const { user } = await this.createUser.execute({
      latitude,
      longitude,
      name,
      password,
      photoSelfie,
      registrationNumber,
    });
    return {
      user: UserViewModel.toHTTP(user),
    };
  }
}
