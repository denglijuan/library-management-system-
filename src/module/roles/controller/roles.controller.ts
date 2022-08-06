import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateRolesDto } from '../dto/create-roles.dto';
import { RolesService } from '../service/roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateRolesDto) {
    this.rolesService.create(body);
    return '创建成功';
  }
}
