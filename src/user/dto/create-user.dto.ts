import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserEnum } from 'src/util/enum/userEnum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(UserEnum)
  accountType: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}
