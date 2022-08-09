import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from '../dto/login-users.dto';
import { Users } from '../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly classificationRepository: Repository<Users>,
  ) {}

  create(loginUserDto: LoginUserDto) {
    const user = this.classificationRepository.create(loginUserDto);
    return this.classificationRepository.save(user);
  }

  async findOne(name: string) {
    const user = await this.classificationRepository.findOneBy({
      name,
    });
    if (!user) {
      throw new NotFoundException(`Classification #${name} not found`);
    }
    console.log('user', user);
    return user;
  }
}
