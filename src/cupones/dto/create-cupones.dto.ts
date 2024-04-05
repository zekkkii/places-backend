import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCuponesDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  realatedUser: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;
}
