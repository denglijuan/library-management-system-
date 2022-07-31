import { Module } from '@nestjs/common';
import { ClassificationController } from './controller/classification.controller';
import { ClassificationService } from './service/classification.service';

@Module({
  controllers: [ClassificationController],
  providers: [ClassificationService],
  exports: [ClassificationService],
})
export class ClassificationModule {}
