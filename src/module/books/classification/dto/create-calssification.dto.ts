import { IsString } from 'class-validator';

export class CreateClassification {
  @IsString()
  readonly type: string;

  @IsString()
  readonly describe: string;
}
