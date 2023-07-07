import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ProductModule } from './products/product.module';
import { AuthModule } from './auth/auth.module';
import { Users } from './entities/user.entity';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 't2.ccz9d04wcbez.ap-southeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: '123456789',
      database: 't',
      entities: [Users],
      synchronize: true,
    }),
  ],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
