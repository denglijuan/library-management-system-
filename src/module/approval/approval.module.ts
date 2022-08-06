import { Module } from '@nestjs/common';
import { ApprovalController } from './controller/approval.controller';
import { ApprovalService } from './service/approval.service';
import { Approval } from './entities/approval.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Approval])],
  controllers: [ApprovalController],
  providers: [ApprovalService],
})
export class ApprovalModule {}
