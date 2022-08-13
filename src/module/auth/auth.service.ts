import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { omit } from 'lodash';
import { LoginUserDto } from 'src/module/users/login-users.dto';
import { UsersService } from 'src/module/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: LoginUserDto): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user) {
    const token = this.jwtService.sign({
      username: user.username,
      sub: user.username,
    });
    const new_user = omit(user, ['password']);
    return { ...new_user, token };
  }
}
