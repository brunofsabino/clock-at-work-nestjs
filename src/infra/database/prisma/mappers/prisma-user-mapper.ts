import { User } from '@application/entities/user';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      latitude: user.latitude,
      longitude: user.longitude,
      password: user.password,
      registrationNumber: user.registrationNumber,
      photoSelfie: user.photoSelfie,
    };
  }
}
