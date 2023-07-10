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
import { ResponseData } from 'src/global/globalClass';
import { HttpMEssage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProduceController {
  constructor(private readonly produceService: ProductService) {}

  @Get()
  getAllProduct(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        this.produceService.getAllProduct(),
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS
      );
    } catch {
      return new ResponseData<Product[]>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR
      );
    }
  }

  @Post()
  createProduct(@Body() product: ProductDto): ResponseData<ProductDto> {
    try {
      return new ResponseData<Product>(
        this.produceService.createProduct(product),
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS
      );
    } catch {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR
      );
    }
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.produceService.getProductById(id),
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS
      );
    } catch {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR
      );
    }
  }

  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: ProductDto
  ): ResponseData<ProductDto> {
    try {
      return new ResponseData<ProductDto>(
        this.produceService.updateProduct(id, product),
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS
      );
    } catch {
      return new ResponseData<ProductDto>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR
      );
    }
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number): ResponseData<boolean> {
    try {
      return new ResponseData<boolean>(
        this.produceService.deleteProduct(id),
        HttpStatus.SUCCESS,
        HttpMEssage.SUCCESS
      );
    } catch {
      return new ResponseData<boolean>(
        null,
        HttpStatus.ERROR,
        HttpMEssage.ERROR
      );
    }
  }
}
