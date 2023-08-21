import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
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

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  urlSource: string;
}
