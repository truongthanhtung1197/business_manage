import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    ProductModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'test3',
    //   entities: [],
    //   synchronize: true,
    // }),
  ],
})
export class AppModule {}
