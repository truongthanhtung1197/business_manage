import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProduceDto } from './product.dto';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMEssage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';

@Controller('products')
export class ProduceController {
  constructor(private readonly produceService: ProductService) {}

  @Get()
  getAllProduct(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        this.produceService.getAllProduct(),
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS,
      );
    } catch {
      return new ResponseData<Product[]>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR,
      );
    }
  }

  @Post()
  createProduct(@Body() product: ProduceDto): ResponseData<ProduceDto> {
    try {
      return new ResponseData<ProduceDto>(
        product,
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS,
      );
    } catch {
      return new ResponseData<ProduceDto>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR,
      );
    }
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.produceService.getProductById(id),
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS,
      );
    } catch {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR,
      );
    }
  }

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.produceService.updateProduct(),
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS,
      );
    } catch {
      return new ResponseData<string>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR,
      );
    }
  }

  @Delete(':id')
  deleteProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.produceService.deleteProduct(),
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS,
      );
    } catch {
      return new ResponseData<string>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR,
      );
    }
  }
}
