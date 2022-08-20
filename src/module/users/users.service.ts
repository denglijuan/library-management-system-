import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';
import { LoginUserDto } from './dto/login-users.dto';
import { Users } from './users.entity';
import { UpdateUserDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly users: Repository<Users>,
  ) {}

  create({ username, password }: LoginUserDto) {
    const hashPassword = bcryptjs.hashSync(password, 10);
    const user = this.users.create({
      username,
      password: hashPassword,
    });
    return this.users.save(user);
  }

  async login(username: string, password: string) {
    const user = await this.findOne(username);
    const isPassword = bcryptjs.compareSync(password, user.password);

    if (!isPassword) {
      throw new InternalServerErrorException(`密码错误`);
    }

    return user;
  }

  async findOne(username: string) {
    const user = await this.users.findOneBy({
      username,
    });

    if (user) {
      return user;
    }

    throw new InternalServerErrorException(`账户不存在`);
  }

  async remove(username: string) {
    const user = await this.findOne(username);
    return this.users.softRemove(user);
  }

  async update(username: string, updateUserDto) {
    if (updateUserDto?.password) {
      const hashPassword = bcryptjs.hashSync(updateUserDto.password, 10);

      const user = await this.users.preload({
        username,
        ...updateUserDto,
        password: hashPassword,
      });

      if (!user) {
        throw new InternalServerErrorException(`账户不存在`);
      }

      return this.users.save(user);
    } else {
      const user = await this.users.preload({
        username,
        ...updateUserDto,
      });

      if (!user) {
        throw new InternalServerErrorException(`账户不存在`);
      }

      return this.users.save(user);
    }
  }
}
