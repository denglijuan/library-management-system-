import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsController } from './controller/permissions.controller';
import { Permissions } from './entities/permissions.entity';
import { PermissionsService } from './service/permissions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permissions])],
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
