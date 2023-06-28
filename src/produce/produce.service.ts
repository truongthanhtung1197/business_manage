import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ProduceDto } from './produce.dto';

@Injectable()
export class ProduceService {
  createProduce(produce: ProduceDto): any {
    const data = plainToClass(ProduceDto, produce, {
      excludeExtraneousValues: true,
    });
    return data;
  }
}
