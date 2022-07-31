import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 路由前缀
  app.setGlobalPrefix('v1');

  // 内置验证管道
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
