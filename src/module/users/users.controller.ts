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
import { LoginUserDto } from './login-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() loginUserDto: LoginUserDto) {
    const user = await this.usersService.create(loginUserDto);
    return user.username;
  }

  @Get(':name')
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('name') name: string) {
    const user = await this.usersService.findOne(name);
    return user.username;
  }
}
