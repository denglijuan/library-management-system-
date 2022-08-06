import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolesDto } from '../dto/create-roles.dto';
import { Roles } from '../entities/roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}

  create(createRolesDto: CreateRolesDto) {
    const role = this.rolesRepository.create(createRolesDto);
    return this.rolesRepository.save(role);
  }
}
