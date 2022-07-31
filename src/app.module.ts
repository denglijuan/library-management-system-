import { Module } from '@nestjs/common';
import { ClassificationModule } from './module/books/classification/classification.module';

@Module({
  imports: [ClassificationModule],
})
export class AppModule {}
