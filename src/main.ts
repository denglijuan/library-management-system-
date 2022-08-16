import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './throw/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 路由前缀
  app.setGlobalPrefix('v1');

  // 全局注册错误过滤器
  app.useGlobalFilters(new AllExceptionsFilter());

  // swagger 生成文档
  const options = new DocumentBuilder()
    .setTitle('图书管理系统') // 标题
    .setDescription('') // 描述
    .setVersion('1.0.0') // 版本
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('v1', app, document);

  // 内置验证管道;
  app.useGlobalPipes(
    new ValidationPipe({
      // 验证器将过滤无用的属性
      whitelist: true,

      // 存有多余的字段则会抛出 400 错误
      // forbidNonWhitelisted: true,

      transform: true,

      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
