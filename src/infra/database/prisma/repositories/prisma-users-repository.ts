import { Injectable } from '@nestjs/common';
import { User } from '../../../../application/entities/user';
import { UsersRepository } from '../../../../application/repositories/users-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: User): Promise<void> {
    await this.prismaService.user.create({
      data: {
        id: user.id,
        name: user.name,
        latitude: user.latitude,
        longitude: user.longitude,
        password: user.password,
        registrationNumber: user.registrationNumber,
        photoSelfie: user.photoSelfie,
      },
    });
  }
}
