import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export enum UserRole {
  admin = 'admin',
  staff = 'staff',
  customer = 'customer',
}

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
  phone_number: string;

  @IsOptional()
  address: string;

  @IsOptional()
  salary: string;
}

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
