import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';
import { LoginUserDto } from './login-users.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly classificationRepository: Repository<Users>,
  ) {}

  create({ username, password }: LoginUserDto) {
    const hashPassword = bcryptjs.hashSync(password, 10);
    const user = this.classificationRepository.create({
      username,
      password: hashPassword,
    });
    return this.classificationRepository.save(user);
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
    const user = await this.classificationRepository.findOneBy({
      username,
    });

    if (user) {
      return user;
    }

    throw new InternalServerErrorException(`账户不存在`);
  }
}
