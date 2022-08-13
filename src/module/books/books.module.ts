import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassificationController } from './classification/classification.controller';
import { Classification } from './classification/classification.entity';
import { ClassificationService } from './classification/classification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Classification])],
  controllers: [ClassificationController],
  providers: [ClassificationService],
})
export class BooksModule {}
