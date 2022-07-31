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

@Controller('books')
export class ClassificationController {
  @Get('classification')
  list(@Query() query): string {
    return query;
  }

  // @Param() params 传入整个的 query 参数
  @Delete('classification/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    console.log('id', id);
    return id;
  }

  @Post('classification')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body) {
    console.log('body', body);
    return body;
  }

  @Patch('classification/:id')
  update(@Param(':id') id: number, @Body() body) {
    return body;
  }
}
