import { Injectable } from '@nestjs/common';
import { Classification } from '../entities/classification.entity';

@Injectable()
export class ClassificationService {
  private classification: Classification[] = [];

  list(limit: number, offset: number) {
    return this.classification.slice(offset, offset + limit);
  }

  remove(id: number) {
    this.classification = this.classification.filter((item) => {
      console.log('id', typeof id);
      console.log('item.id', typeof item.id);
      console.log('item.id !== id', item.id !== id);
      return item.id !== id;
    });
    console.log('this.classification', this.classification);
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
