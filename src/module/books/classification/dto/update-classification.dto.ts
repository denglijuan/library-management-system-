import { PartialType } from '@nestjs/mapped-types';
import { CreateClassification } from './create-calssification.dto';

// 将 CreateClassification 的所有属性都设置可选的，并且继承了所有验证规则
export class UpdateClassification extends PartialType(CreateClassification) {}
