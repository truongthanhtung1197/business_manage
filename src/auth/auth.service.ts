import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { omit } from 'ramda';
import { Users } from 'src/entities/user.entity';
import { DataSource } from 'typeorm';
import { LoginDto, UserDto } from './auth.dto';

@Injectable({})
export class AuthService {
  constructor(private dataSource: DataSource) {}
  async createUser(user: UserDto) {
    try {
      const hasPassword = await argon.hash(user.password);
      await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(Users)
        .values([
          {
            ...user,
            password: hasPassword,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ])
        .execute();
      return omit(['password'], user);
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }

  async login(user: LoginDto) {
    try {
      const firstUser = await this.dataSource
        .getRepository(Users)
        .createQueryBuilder('user')
        .where('user.email = :email', {
          email: user.email,
        })
        .getOne();

      if (!firstUser) throw new ForbiddenException('user not found');

      if (firstUser) {
        const verifyPassword = await argon.verify(
          firstUser?.password,
          user?.password
        );

        if (verifyPassword) {
          return omit(['password'], firstUser);
        } else {
          throw new ForbiddenException('invalid password');
        }
      }
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }
}
