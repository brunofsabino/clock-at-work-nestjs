import { Module } from '@nestjs/common';
import { registeringPointUser } from 'src/application/use-cases/registeringPointUser';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [registeringPointUser],
})
export class HttpModule {}
