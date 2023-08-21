import { PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @IsInt()
  @IsNotEmpty()
  id: number;
}
