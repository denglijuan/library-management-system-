import { Module } from '@nestjs/common';
import { ApprovalController } from './approval.controller';
import { ApprovalService } from './approval.service';
import { Approval } from './approval.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Approval])],
  controllers: [ApprovalController],
  providers: [ApprovalService],
})
export class ApprovalModule {}
