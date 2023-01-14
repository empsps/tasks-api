import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class RegisterUser {
  @IsString()
  @Length(3, 30)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(12)
  password: string;

  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;
}
