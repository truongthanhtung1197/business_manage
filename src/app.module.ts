import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Users } from './entities/user.entity';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
