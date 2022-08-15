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
  create(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.create(loginUserDto);
  }

  @Get(':name')
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('name') name: string): Promise<boolean> {
    return await this.usersService.findOne(name);
  }
}
