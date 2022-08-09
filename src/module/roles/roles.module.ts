import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permissions } from '../permissions/entities/permissions.entity';
import { RolesController } from './controller/roles.controller';
import { Roles } from './entities/roles.entity';
import { RolesService } from './service/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Roles, Permissions])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
