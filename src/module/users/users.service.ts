import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './login-users.dto';
import { Users } from './users.entity';

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

  async findOne(username: string) {
    const user = await this.classificationRepository.findOneBy({
      username,
    });
    if (!user) {
      throw new InternalServerErrorException(`Users #${username} not found`);
    }
    return user;
  }
}
