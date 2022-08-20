import {
  Body,
  Controller,
  Delete,
  Patch,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateRolesDto } from './create-roles.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body) {
    await this.rolesService.create(body);
    return '创建成功';
  }

  @Delete()
  async delete(@Param('id') id: string) {
    await this.rolesService.delete(id);
    return '删除成功';
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body) {
    await this.rolesService.update(id, body);
  }
}
