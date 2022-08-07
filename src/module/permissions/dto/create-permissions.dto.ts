import { IsString } from 'class-validator';

export class CreatePermissionsDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description?: string;
}
