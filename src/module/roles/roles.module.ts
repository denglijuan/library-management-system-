import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permissions } from '../permissions/permissions.entity';
import { RolesController } from './roles.controller';
import { Roles } from './roles.entity';
import { RolesService } from './roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Roles, Permissions])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
