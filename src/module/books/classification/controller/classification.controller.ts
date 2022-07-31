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
import { CreateClassification } from '../dto/create-calssification.dto';
import { UpdateClassification } from '../dto/update-classification.dto';
import { ClassificationService } from '../service/classification.service';

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
  remove(@Param('id') id: number) {
    this.classificationService.remove(+id);
  }

  @Post('classification')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateClassification) {
    const id = this.classificationService.create(body);
    return { id, describe: '创建成功' };
  }

  @Patch('classification/:id')
  update(@Param('id') id: number, @Body() body: UpdateClassification) {
    this.classificationService.update(+id, body);
  }
}
