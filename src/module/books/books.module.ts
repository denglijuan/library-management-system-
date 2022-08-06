import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassificationController } from './controller/classification.controller';
import { Classification } from './entities/classification.entity';
import { ClassificationService } from './service/classification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Classification])],
  controllers: [ClassificationController],
  providers: [ClassificationService],
})
export class BooksModule {}
