import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  SetMetadata,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/module/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/module/auth/guards/local-auth.guard';
import { AuthService } from 'src/module/auth/service/auth.service';
import { LoginUserDto } from 'src/module/users/dto/login-users.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  // @SetMetadata('whiteList', true)
  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Body() loginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return {
      message: 'hello world',
    };
  }
}
