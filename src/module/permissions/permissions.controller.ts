import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreatePermissionsDto } from './create-permissions.dto';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreatePermissionsDto[]) {
    this.permissionsService.create(body);
  }
}
