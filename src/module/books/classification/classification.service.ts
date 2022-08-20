import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassificationDto } from './dto/create-calssification.dto';
import { UpdateClassificationDto } from './dto/update-classification.dto';
import { Classification } from './classification.entity';

@Injectable()
export class ClassificationService {
  constructor(
    @InjectRepository(Classification)
    private readonly classificationRepository: Repository<Classification>,
  ) {}

  list(limit: number, offset: number) {
    return this.classificationRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const classification = await this.classificationRepository.findOneBy({
      id,
    });
    if (!classification) {
      throw new NotFoundException(`Classification #${id} not found`);
    }
    return classification;
  }

  async remove(id: string) {
    const classification = await this.findOne(id);
    return this.classificationRepository.remove(classification);
  }

  create(createClassificationDto: CreateClassificationDto) {
    const classification = this.classificationRepository.create(
      createClassificationDto,
    );
    return this.classificationRepository.save(classification);
  }

  async update(id: string, updateClassificationDto: UpdateClassificationDto) {
    const classification = await this.classificationRepository.preload({
      id,
      ...updateClassificationDto,
    });

    if (!classification) {
      throw new NotFoundException(`Classification #${id} not found`);
    }

    return this.classificationRepository.save(classification);
  }
}
