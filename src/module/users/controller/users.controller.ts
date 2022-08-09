import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { LoginUserDto } from '../dto/login-users.dto';
import { Users } from '../entities/users.entity';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.create(loginUserDto);
  }

  @Get(':name')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('name') name: string): Promise<Users> {
    return this.usersService.findOne(name);
  }
}
