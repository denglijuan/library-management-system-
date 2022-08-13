import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/module/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/module/auth/guards/local-auth.guard';
import { AuthService } from 'src/module/auth/auth.service';

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return {
      message: 'hello world',
    };
  }
}
