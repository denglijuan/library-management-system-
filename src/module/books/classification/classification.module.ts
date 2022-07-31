import { Module } from '@nestjs/common';
import { ClassificationController } from './controller/classification.controller';
// import { CreateService } from './service';

@Module({
  controllers: [ClassificationController],
  providers: [],
  exports: [],
})
export class ClassificationModule {}
