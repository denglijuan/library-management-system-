import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreatePermissionsDto } from '../dto/create-permissions.dto';
import { Permissions } from '../entities/permissions.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permissions)
    private readonly permissionsRepository: Repository<Permissions>,
  ) {}

  async create(body: CreatePermissionsDto[]) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Permissions)
      .values(body)
      .execute();
  }
}
