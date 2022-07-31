import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Classification } from '../entities/classification.entity';

@Injectable()
export class ClassificationService {
  private classification: Classification[] = [];

  list(limit: number, offset: number) {
    return this.classification.slice(offset, offset + limit);
  }

  remove(id: number) {
    const oldLength = this.classification.length;
    this.classification = this.classification.filter((item) => {
      return item.id !== id;
    });
    const newLength = this.classification.length;
    if (oldLength === newLength) {
      // throw new HttpException(
      //   `Classification #${id} not found`,
      //   HttpStatus.NOT_FOUND,
      // );

      throw new NotFoundException(`Classification #${id} not found`);
    }
  }

  create(classificationDto: any) {
    const last = this.classification.length - 1;
    const id = this.classification[last]?.id + 1 || 1;
    this.classification.push({ ...classificationDto, id });
    return id;
  }

  update(id: number, classificationDto: any) {
    this.classification = this.classification.map((item) => {
      if (id === item.id) {
        return { ...classificationDto, id };
      }
      return item;
    });
  }
}
