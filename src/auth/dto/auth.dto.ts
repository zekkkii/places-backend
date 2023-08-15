import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  userOrEmail: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
