import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuth } from './module/auth/JwtAuth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 路由前缀
  app.setGlobalPrefix('v1');

  // 全局 jwt
  // app.useGlobalGuards(new JwtAuth(new Reflector()));

  // 内置验证管道
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     // 验证器将过滤无用的属性
  //     whitelist: true,

  //     // 存有多余的字段则会抛出 400 错误
  //     // forbidNonWhitelisted: true,

  //     transform: true,

  //     transformOptions: {
  //       enableImplicitConversion: true,
  //     },
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
