import { PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateCuponesDto } from './create-cupones.dto';

export class UpdateCuponesDto extends PartialType(CreateCuponesDto) {
  @IsInt()
  @IsNotEmpty()
  id: number;
}
