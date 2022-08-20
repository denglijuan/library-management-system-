import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
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

  @Get(':username')
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('username') username: string) {
    const user = await this.usersService.findOne(username);
    return user.username;
  }

  @Delete(':username')
  async delete(@Param('username') username: string) {
    await this.usersService.remove(username);
    return username;
  }

  @Patch(':username')
  async update(
    @Param('username') username: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.usersService.update(username, updateUserDto);
    return username;
  }
}
