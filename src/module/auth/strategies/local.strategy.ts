import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(name: string, password: string): Promise<any> {
    console.log('1111111111');
    const user = await this.authService.validateUser({ name, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
