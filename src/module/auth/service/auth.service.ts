import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { omit } from 'lodash';
import { LoginUserDto } from 'src/module/users/dto/login-users.dto';
import { UsersService } from 'src/module/users/service/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ name, password }: LoginUserDto): Promise<any> {
    const user = await this.userService.findOne(name);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.validateUser(loginUserDto);
    const payload = this.jwtService.sign({
      name: user.name,
      sub: user.name,
    });
    const new_user = omit(user, ['password']);
    return { ...new_user, token: payload };
  }
}
