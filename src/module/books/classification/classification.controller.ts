import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateClassificationDto } from './create-calssification.dto';
import { UpdateClassificationDto } from './update-classification.dto';
import { ClassificationService } from './classification.service';

@Controller('books')
export class ClassificationController {
  constructor(private readonly classificationService: ClassificationService) {}

  @Get('classification')
  list(@Query() query) {
    const { limit = 10, offset = 0 } = query;
    return this.classificationService.list(limit, offset);
  }

  // @Param() params 传入整个的 query 参数
  @Delete('classification/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    this.classificationService.remove(id);
  }

  @Post('classification')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateClassificationDto) {
    this.classificationService.create(body);
    return '创建成功';
  }

  @Patch('classification/:id')
  update(@Param('id') id: string, @Body() body: UpdateClassificationDto) {
    this.classificationService.update(id, body);
  }
}
