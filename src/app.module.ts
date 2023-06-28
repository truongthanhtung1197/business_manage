import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduceModule } from './produce/produce.module';

@Module({
  imports: [
    ProduceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'business_manage',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
