import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { IsUsername } from '../../validator';

class RegisterDTO {
  @IsString()
  @IsUsername({
    message:
      'Username must have letters, numbers, underscores and dots. Must be 4 to 25 ' +
      'characters long and must not begin or end with a dot.',
  })
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minSymbols: 1,
    minLength: 10,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
  })
  password: string;
}

class LoginDTO {
  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export { RegisterDTO, LoginDTO };
