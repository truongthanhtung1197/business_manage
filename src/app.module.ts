import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 't2.ccz9d04wcbez.ap-southeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: '123456789',
      database: 't',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}