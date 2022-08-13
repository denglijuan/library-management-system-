import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permissions } from 'src/module/permissions/permissions.entity';
import { getManager, Repository } from 'typeorm';
import { CreateRolesDto } from './create-roles.dto';
import { Roles } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
    @InjectRepository(Permissions)
    private readonly permissionsRepository: Repository<Permissions>,
  ) {}

  async create(createRolesDto: CreateRolesDto) {
    const list = [];
    for (let i = 0; i < createRolesDto.permission.length; i++) {
      const permission = await this.permissionsRepository.findOneBy({
        id: createRolesDto.permission[i],
      });
      list.push(permission);
    }

    const roles = new Roles();
    roles.name = createRolesDto.name;
    roles.description = createRolesDto.description;
    roles.permissions = list;

    return await this.rolesRepository.save(roles);
  }

  async delete(id: string) {
    const role = await this.rolesRepository.findOneBy({ id });
    return this.rolesRepository.remove(role);
  }
}
