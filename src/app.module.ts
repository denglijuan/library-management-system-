import { Module } from '@nestjs/common';
import { ClassificationModule } from './module/books/classification/classification.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ClassificationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'library_management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
