import { IsString } from 'class-validator';

export class CreateClassificationDto {
  @IsString()
  readonly type: string;

  @IsString()
  readonly description?: string;
}
