import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProduceDto } from './produce.dto';
import { ProduceService } from './produce.service';

@Controller('produces')
export class ProduceController {
  constructor(private readonly produceService: ProduceService) {}

  @Get()
  getAllProduce() {
    return [
      { id: 1, name: 'tranh phong canh' },
      { id: 2, name: 'tranh' },
    ];
  }

  @Post()
  createProduce(@Body() produce: ProduceDto): any {
    console.log('------------------');
    console.log(
      'this.produceService.createProduce(produce):',
      this.produceService.createProduce(produce),
    );
    console.log('------------------');
    return this.produceService.createProduce(produce);
  }

  @Get(':id')
  getProduceById(@Param('id', ParseIntPipe) id: number) {
    console.log('------------------');
    console.log('id:', id);
    console.log('------------------');
    return id;
  }
}
