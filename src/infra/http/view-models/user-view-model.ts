import { User } from '@application/entities/user';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      name: user.name,
      latitude: user.latitude,
      longitude: user.longitude,
      photoSelfie: user.photoSelfie,
      registrationNumber: user.registrationNumber,
    };
  }
}
