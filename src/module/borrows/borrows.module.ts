import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowsService } from './borrows.service';
import { Borrows } from './borrows.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Borrows])],
  controllers: [],
  providers: [BorrowsService],
})
export class BorrowsModule {}
