import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { UserDto } from './auth.dto';
import { DataSource } from 'typeorm';
import { Users } from 'src/entities/user.entity';
import { omit } from 'ramda';

@Injectable({})
export class AuthService {
  constructor(private dataSource: DataSource) {}
  async createUser(user: UserDto) {
    try {
      const hasPassword = await argon.hash('password');
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

  async login(user: UserDto) {
    const firstUser = await this.dataSource
      .getRepository(Users)
      .createQueryBuilder('user')
      .where('user.email = :email', { email: user.email })
      .getOne();
    console.log('firstUser', firstUser);
  }
}
