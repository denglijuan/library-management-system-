import { IsString } from 'class-validator';

export class UpdateClassification {
  @IsString()
  readonly type?: string;

  @IsString()
  readonly describe?: string;
}
