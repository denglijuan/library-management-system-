import { Module } from '@nestjs/common';
import { BorrowsService } from './borrows.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BorrowsService],
})
export class BorrowsModule {}
